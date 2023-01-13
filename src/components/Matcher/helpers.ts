import { createId } from './../../utils/index';
import { generateRandomHexColor, hexToRGB, rgbToHsl, extractColorLuminance } from '../../utils/color';
import { IColor } from './../../types/color';

export const generateHexArr = (qty: number) => {
  const hexCodesArr: string[] = [];

  for (let i = 0; i < qty; i++) {
    hexCodesArr.push(generateRandomHexColor());
  }

  return hexCodesArr;
};

export const createColorItem = (hexCode: string): IColor => {
  const rgbColor = hexToRGB(hexCode);
  const hslColor = rgbToHsl(rgbColor);

  return {
    id: createId(),
    models: {
      hexFormat: hexCode,
      rgbFormat: rgbColor,
      hslFormat: hslColor,
    },
    luminance: extractColorLuminance(hslColor),
    isSelected: false,
  };
};

export const resetColors = (colors: IColor[]): IColor[] => {
  return colors.map((color) => {
    if (color.isSelected) {
      return color;
    } else {
      return createColorItem(generateRandomHexColor());
    }
  });
};

export const toggleSelectedState = (colors: IColor[], id: string) => {
  return colors.map((color) => {
    if (color.id === id) {
      return {
        ...color,
        isSelected: !color.isSelected,
      };
    } else {
      return color;
    }
  });
};
