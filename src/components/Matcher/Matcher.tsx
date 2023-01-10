import { FC, useState, useEffect, KeyboardEvent } from 'react';
import styles from './Matcher.module.css';
import Column from '../Column/Column';
import { IColor } from '../../types/color';
import { createColorItem, generateHexArr, resetColors, toggleSelectedState } from './helpers';
import { setColorsToHash, getColorsFromHash } from '../../utils';

const Matcher: FC = () => {
  const [colorsItemArr, setColorsItemArr] = useState<IColor[]>([]);

  const changeColors = (e: KeyboardEvent<HTMLElement>): void => {
    if (e.code.toLowerCase() === 'space') {
      e.preventDefault();
      setColorsItemArr((prevColors) => {
        const newColors = resetColors(prevColors);

        setColorsToHash(newColors);

        return newColors;
      });
    }
  };

  const toggleLock = (id: string) => {
    setColorsItemArr((prevColors) => toggleSelectedState(prevColors, id));
  };

  useEffect(() => {
    const hexCodesArr = getColorsFromHash() || generateHexArr(5);

    setColorsItemArr(() => hexCodesArr.map((hexCode) => createColorItem(hexCode)));
  }, []);

  return (
    <section className={styles.matcher} onKeyDown={(e) => changeColors(e)} tabIndex={0}>
      {/* <h1 className={styles.matcher__title}>Match The Color !</h1> */}
      <ul className={styles.matcher__colorsList}>
        {colorsItemArr.map((color) => (
          <Column key={color.id} colorObj={color} onLockClick={toggleLock} />
        ))}
      </ul>
      {/* <span className={styles.matcher__caption}>Press «space»</span> */}
    </section>
  );
};

export default Matcher;
