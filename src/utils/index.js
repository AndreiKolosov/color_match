function copyToClipboard(text) {
  return navigator.clipboard.writeText(text);
}

function setColorsToHash(colors = []) {
  document.location.hash = colors
    .map((color) => {
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

export { getColorsFromHash, setColorsToHash, copyToClipboard };
