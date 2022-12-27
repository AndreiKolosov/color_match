import { IColor } from './../../types/color';
import { Color } from './Color';

export const createColorsArr = (qty: number): IColor[] => {
  const colors: IColor[] = [];

  for (let i = 0; i < qty; i++) {
    const color = new Color();
    colors.push(color);
  }

  return colors;
};

export const resetColors = (colors: IColor[]): IColor[] => {
  return colors.map((color) => {
    if (color.isSelected) {
      return color;
    } else {
      return color.changeColor();
    }
  })
}

export const toggleSelectedState = (colors: IColor[], id: string) => {
  console.log(id);
  
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