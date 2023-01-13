import { HTMLProps } from 'react';
import { IColor } from '../../types/color';

export interface IColorColumnProps extends HTMLProps<HTMLLIElement> {
  colorObj: IColor;
  canRemove: boolean;
  onLockClick: (colorId: string) => void;
  onDeleteClick: (colorId: string) => void;
}