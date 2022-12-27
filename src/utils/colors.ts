export function hexToRGB(hex: string): string {
  let r = '',
    g = '',
    b = '';

  // 3 digits UTF-8 (hex)
  if (hex.length === 4) {
    r = '0x' + hex[1] + hex[1];
    g = '0x' + hex[2] + hex[2];
    b = '0x' + hex[3] + hex[3];

    // 6 digits UTF-8 (hex)
  } else if (hex.length === 7) {
    r = '0x' + hex[1] + hex[2];
    g = '0x' + hex[3] + hex[4];
    b = '0x' + hex[5] + hex[6];
  }

  return `rgb(${+r}, ${+g}, ${+b})`
}

export function rgbToHsl(rgb: string) {
  let [r, g, b] = rgb
    .replace(/[rgb()\s]/g, '')
    .split(',')
    .map(str => Number(str));
  
  r /= 255;
  g /= 255;
  b /= 255;

  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
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
    
    if(h) {
      h /= 6;
    } else {
      h = 0 
    }
  }

  h = Math.round(360 * h);
  s = Math.round(s * 100);
  l = Math.round(l * 100);


  return `hsl(${h}, ${s}%, ${l}%)`
}

export const getColorLuminance = (hslColor: string): number => {
  const [, , lightness] = hslColor
    .replace(/[rgb()\s%]/g, '')
    .split(',')
    .map((str) => Number(str));
  
  return lightness; 
}

export const generateRandomHexColor = (): string => {
  //RGB
  // R #FF0000
  // G #00FF00
  // B #0000FF

  const hex = '0123456789ABCDEF';
  let hexColorCode = '#';

  for (let i = 0; i < 6; i++) {
    hexColorCode += hex[Math.floor(Math.random() * hex.length)];
  }

  return hexColorCode;
};
