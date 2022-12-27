import { FC } from 'react';
import styles from './Column.module.css';
import { IColumnProps } from './Column.props';
import UnlockIcon from '../Icons/UnlockIcon/UnlockIcon';
import LockIcon from '../Icons/LockIcon/LockIcon';

const Column: FC<IColumnProps> = ({ colorObj, onLockClick }) => {
  const { hex, luminance, isSelected, id } = colorObj;
  const textColor = luminance > 50 ? '#000' : '#FFF';

  return (
    <li className={styles.column} style={{ background: hex }}>
      <span className={styles.column__code} style={{ color: textColor }}>
        {hex}
      </span>
      <button className={styles.column__btn} type="button" onClick={() => onLockClick(id)}>
        {isSelected ? (
          <LockIcon fill={textColor} className={styles.column__btnIcon} />
        ) : (
          <UnlockIcon fill={textColor} className={styles.column__btnIcon} />
        )}
      </button>
    </li>
  );
}

export default Column;