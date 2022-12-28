export interface IColorModels {
  hexFormat: string;
  rgbFormat: string;
  hslFormat: string;
}

export interface IColor {
  id: string;
  models: IColorModels;
  luminance: number;
  isSelected: boolean;
}
