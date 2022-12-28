import { createId } from './../../utils/index';
import { generateRandomHexColor, hexToRGB, rgbToHsl, extractColorLuminance } from '../../utils/color';
import { IColor } from './../../types/color';

export const createColorItem = (): IColor => {
  const hexColor = generateRandomHexColor();
  const rgbColor = hexToRGB(hexColor);
  const hslColor = rgbToHsl(rgbColor);

  return ({
    id: createId(),
    models: {
      hexFormat: hexColor,
      rgbFormat: rgbColor,
      hslFormat: hslColor,
    },
    luminance: extractColorLuminance(hslColor),
    isSelected: false,
  })
}

export const createColorsItemArr = (qty: number): IColor[] => {
  const colors: IColor[] = [];

  for (let i = 0; i < qty; i++) {
    const color = createColorItem();
    colors.push(color);
  }
  
  return colors;
};

export const resetColors = (colors: IColor[]): IColor[] => {
  return colors.map((color) => {
    if (color.isSelected) {
      return color;
    } else {
      return createColorItem();
    }
  })
}

export const toggleSelectedState = (colors: IColor[], id: string) => {
  return colors.map((color) => {
    if(color.id === id) {
      return ({
        ...color,
        isSelected: !color.isSelected,
      });
    } else {
      return color;
    }
  })
}