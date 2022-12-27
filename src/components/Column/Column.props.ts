import { HTMLProps } from 'react';
import { IColor } from '../../types/color';

export interface IColumnProps extends HTMLProps<HTMLLIElement> {
  colorObj: IColor;
  onLockClick: (id: string) => void;
}