import { IColor } from '../../types/color';
import { generateRandomHexColor, hexToRGB, rgbToHsl, getColorLuminance } from './../../utils/colors';
import { createId } from './../../utils/index';

export class Color implements IColor {
  id = createId();
  hex = generateRandomHexColor();
  rgb = hexToRGB(this.hex);
  hsl = rgbToHsl(this.rgb);
  luminance = getColorLuminance(this.hsl);
  isSelected = false; 

  
  changeColor() {
    this.hex = generateRandomHexColor();

    return this;
  }
  
}
