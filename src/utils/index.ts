import { IColor } from './../types/color';
export const createId = () => 'id' + Math.random().toString(16).slice(2);

export const copyToClipBoard = (str: string) => {
  return navigator.clipboard.writeText(str);
};

export const setColorsToHash = (colors: IColor[] = []) => {
  document.location.hash = colors
    .map((color) => {
      return color.models.hexFormat.toString().replace(/#/g, '');
    })
    .join('-');
};

export const getColorsFromHash = (): string[] | null => {
  if (document.location.hash.length > 1) {
    return document.location.hash
      .replace(/#/g, '')
      .split('-')
      .map((color) => `#${color}`);
  }

  return null;
};
