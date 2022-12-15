const pageTitle = document.querySelector('.matcher__title');
const columns = document.querySelectorAll('.matcher__column');

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (e.code.toLowerCase() === 'space') {
    setRandomColors();
  }
});

document.addEventListener('click', (e) => {
  const type = e.target.dataset?.type;

  if (type === 'lock') {
    const node = e.target.tagName.toLowerCase() === 'i' ? e.target : e.target.children[0];

    node.classList.toggle('lock')
  } else if (type === 'hex-code') {
    copyToClipboard(e.target.textContent);
  }

});

// function generateRandomColor() {
//   //RGB
//   // R #FF0000
//   // G #00FF00
//   // B #0000FF

//   const hexCodes = '0123456789ABCDEF';
//   let hexColorCode = '#';

//   for (let i = 0; i < 6; i++) {
//     hexColorCode += hexCodes[Math.floor(Math.random() * hexCodes.length)];
//   }

//   return hexColorCode;
// }

function setTextColor(textElement, shade) {
  const luminance = chroma(shade).luminance();

  textElement.style.color = luminance > 0.5 ? '#000' : '#FFF';
}

function setBcgColor(element, shade) {
  const luminance = chroma(shade).luminance();

  element.style.background = luminance > 0.5 ? '#000' : '#FFF';
}

function copyToClipboard(text) {
  return navigator.clipboard.write(text);
}

function setColorsToHash(colors = []) {
  document.location.hash = colors.map((color) => {
    return color.toString().replace(/#/g, '');
  })
  .join('-');
}

function getColorsFromHash() {
  if (document.location.hash.length > 1) {
    return document.location.hash
      .replace(/#/g, '')
      .split('-')
      .map((color) => `#${color}`);
  }

  return [];
}

function setTitleColors() {
  pageTitle.style.background = `linear-gradient(45deg, ${chroma.random()}, ${chroma.random()}, ${chroma.random()})`;
  pageTitle.style.webkitBackgroundClip = 'text';
  pageTitle.style.webkitTextFillColor = 'transparent'
}

function setRandomColors(isInitial) {
  const colors = isInitial ? getColorsFromHash() : [];
  
  columns.forEach((column, index) => {
    const isLocked = column.querySelector('.matcher__btn-icon').classList.contains('lock');
    const codeElement = column.querySelector('.matcher__color-code');
    const lockElement = column.querySelector('.matcher__btn-icon');
    const randomColor = (colors[index] && isInitial) ? colors[index] : chroma.random();

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
  setTitleColors()
  setColorsToHash(colors)
}

setRandomColors(true);
