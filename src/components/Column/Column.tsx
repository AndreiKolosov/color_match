import { FC } from 'react';
import styles from './Column.module.css';
import { IColumnProps } from './Column.props';
import UnlockIcon from '../Icons/UnlockIcon/UnlockIcon';
import LockIcon from '../Icons/LockIcon/LockIcon';
import { copyToClipBoard } from '../../utils';

const Column: FC<IColumnProps> = ({ colorObj, onLockClick }) => { 
  const { models, luminance, isSelected, id } = colorObj;
  const { hexFormat } = models;
  const frontItemsColor = luminance > 50 ? '#000' : '#FFF';

  return (
    <li className={styles.column} style={{ background: hexFormat }}>
      <span
        className={styles.column__code}
        style={{ color: frontItemsColor }}
        onClick={() => copyToClipBoard(hexFormat)}
      >
        {hexFormat}
      </span>
      <button className={styles.column__btn} type="button" onClick={() => onLockClick(id)}>
        {isSelected ? (
          <LockIcon fill={frontItemsColor} className={styles.column__btnIcon} />
        ) : (
          <UnlockIcon fill={frontItemsColor} className={styles.column__btnIcon} />
        )}
      </button> 
    </li>
  );
}

export default Column;