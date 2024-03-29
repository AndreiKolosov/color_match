import { FC, useState, useEffect, KeyboardEvent } from 'react';
import styles from './Matcher.module.css';
import ColorColumn from '../ColorColumn/ColorColumn';
import { IColor } from '../../types/color';
import { addNewColorToState, createColorItem, deleteColorFromState, generateHexArr, resetColors, toggleSelectedState } from './helpers';
import { getColorsFromHash } from '../../utils';
import PlusIcon from '../Icons/PlusIcon/PlusIcon';
import CollapsibleMenu from '../CollapsibleMenu/CollapsibleMenu';

const Matcher: FC = () => {
  const [colorsItemArr, setColorsItemArr] = useState<IColor[]>([]);
  const maxColumnsQty = 7;
  const minColumnsQty = 4;

  const addColorColumn = () => {
    if (colorsItemArr.length < maxColumnsQty) {
      setColorsItemArr((prevColors) => addNewColorToState(prevColors));
    }
  };

  const deleteColorColumn = (colorId: string) => {
    if (colorsItemArr.length > minColumnsQty) {
      setColorsItemArr((prevColors) => deleteColorFromState(prevColors, colorId));
    }
  };

  const changeColors = (e: KeyboardEvent<HTMLElement>): void => {
    if (e.code.toLowerCase() === 'space') {
      e.preventDefault();
      setColorsItemArr((prevColors) => resetColors(prevColors));
    }
  };

  const toggleLock = (colorId: string) => {
    setColorsItemArr((prevColors) => toggleSelectedState(prevColors, colorId));
  };

  useEffect(() => {
    const hexCodesArr = getColorsFromHash() || generateHexArr(5);

    setColorsItemArr(() => hexCodesArr.map((hexCode) => createColorItem(hexCode)));
  }, []);

  return (
    <section className={styles.matcher} onKeyDown={(e) => changeColors(e)} tabIndex={0}>
      <ul className={styles.matcher__colorsList}>
        {colorsItemArr.map((color) => (
          <ColorColumn
            key={color.id}
            colorObj={color}
            canRemove={colorsItemArr.length > minColumnsQty}
            onLockClick={toggleLock}
            onDeleteClick={deleteColorColumn}
          />
        ))}
      </ul>
      {colorsItemArr.length < maxColumnsQty && (
        <button className={styles.matcher__plusBtn} type="button" onClick={() => addColorColumn()}>
          <PlusIcon className={styles.matcher__plusBtnIcon} />
        </button>
      )}
      <CollapsibleMenu className={styles.matcher__hintMenu}/>
    </section>
  );
};

export default Matcher;
