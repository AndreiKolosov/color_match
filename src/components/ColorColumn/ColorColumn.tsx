import { FC } from 'react';
import styles from './ColorColumn.module.css';
import { IColorColumnProps } from './ColorColumn.props';
import UnlockIcon from '../Icons/UnlockIcon/UnlockIcon';
import LockIcon from '../Icons/LockIcon/LockIcon';
import { copyToClipBoard } from '../../utils';
import DeleteIcon from '../Icons/DeleteIcon/DeleteIcon';

const ColorColumn: FC<IColorColumnProps> = ({ colorObj, canRemove, onLockClick, onDeleteClick }) => {
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
      <button className={styles.column__btn} disabled={!canRemove} type="button" onClick={() => onDeleteClick(id)}>
        <DeleteIcon fill={frontItemsColor} className={styles.column__btnIcon} />
      </button>
    </li>
  );
};

export default ColorColumn;