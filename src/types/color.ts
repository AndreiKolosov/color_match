export interface IColor {
  id: string;
  hex: string;
  rgb: string;
  hsl: string;
  luminance: number;
  isSelected: boolean;
  changeColor: () => IColor;
}
