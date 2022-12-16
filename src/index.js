import './pages/index.css';
import { getColorsFromHash, setColorsToHash, copyToClipboard } from './utils';
import { setBcgColor, setTextColor, generateRandomColor, setElementGradient } from './utils/color';

const pageTitle = document.querySelector('.matcher__title');
const captionElement = document.querySelector('.matcher__caption');
const columns = document.querySelectorAll('.matcher__column');

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (e.code.toLowerCase() === 'space') {
    setRandomColors();
    captionElement.style.display = 'none';
    const timer = setTimeout(() => {
      captionElement.style.display = 'block';
      clearTimeout(timer);
    }, 10000);
  }
});

document.addEventListener('click', (e) => {
  const type = e.target.dataset?.type;

  if (type === 'lock') {
    const node = e.target.tagName.toLowerCase() === 'i' ? e.target : e.target.children[0];

    node.classList.toggle('lock');
  } else if (type === 'hex-code') {
    const colorCode = e.target.textContent;

    copyToClipboard(colorCode);
    e.target.textContent = 'Copied !';
    e.target.style.pointerEvents = 'none';

    const timer = setTimeout(() => {
      e.target.textContent = colorCode;
      e.target.style.pointerEvents = 'all';
      clearTimeout(timer);
    }, 1500);
  }
});

function setRandomColors(isInitial) {
  const colors = isInitial ? getColorsFromHash() : [];

  columns.forEach((column, index) => {
    const isLocked = column.querySelector('.matcher__btn-icon').classList.contains('lock');
    const codeElement = column.querySelector('.matcher__color-code');
    const lockElement = column.querySelector('.matcher__btn-icon');
    const randomColor = colors[index] && isInitial ? colors[index] : generateRandomColor();

    if (isLocked) {
      colors.push(codeElement.textContent);
      return;
    }

    if (!isInitial) {
      colors.push(randomColor);
    }

    codeElement.textContent = randomColor;
    column.style.background = randomColor;

    setBcgColor(lockElement, randomColor);
    setTextColor(codeElement, randomColor);
  });

  setElementGradient(pageTitle);
  setColorsToHash(colors);
}

setRandomColors(true);
