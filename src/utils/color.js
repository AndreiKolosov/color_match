function hexToRGB(h) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (h.length == 4) {
    r = '0x' + h[1] + h[1];
    g = '0x' + h[2] + h[2];
    b = '0x' + h[3] + h[3];

    // 6 digits
  } else if (h.length == 7) {
    r = '0x' + h[1] + h[2];
    g = '0x' + h[3] + h[4];
    b = '0x' + h[5] + h[6];
  }

  // returns rgb color in format 'rgb(r,g,b)'
  // return 'rgb(' + +r + ',' + +g + ',' + +b + ')';

  return [+r, +g, +b];
}

function rgbToHsl(rgb) {
  let [r, g, b] = rgb;

  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

function calcColorLuminance(hexColor) {
  const rgb = hexToRGB(hexColor); // [r, g, b]
  const hsl = rgbToHsl(rgb); // [h, s, l]

  return hsl[2]; // l from hsl - lightness
}

function generateRandomColor() {
  //RGB
  // R #FF0000
  // G #00FF00
  // B #0000FF

  const hexCodes = '0123456789ABCDEF';
  let hexColorCode = '#';

  for (let i = 0; i < 6; i++) {
    hexColorCode += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }

  return hexColorCode;
}

function setTextColor(textElement, shade) {
  const luminance = calcColorLuminance(shade);

  textElement.style.color = luminance > 0.5 ? '#000' : '#FFF';
}

function setBcgColor(element, shade) {
  const luminance = calcColorLuminance(shade);

  element.style.background = luminance > 0.5 ? '#000' : '#FFF';
}

function setElementGradient(element) {
  element.style.background = `linear-gradient(45deg, ${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`;
  element.style.webkitBackgroundClip = 'text';
  element.style.webkitTextFillColor = 'transparent';
}

export { generateRandomColor, setTextColor, setBcgColor, setElementGradient };
