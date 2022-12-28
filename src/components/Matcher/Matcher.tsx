import { FC, useState, useEffect, KeyboardEvent } from 'react';
import styles from './Matcher.module.css';
import Column from '../Column/Column';
import { IColor } from '../../types/color';
import { createColorsItemArr, resetColors, toggleSelectedState } from './helpers';
import { setColorsToHash } from '../../utils';

const Matcher: FC = () => {
  const [colorsItemArr, setColorsItemArr] = useState<IColor[]>(createColorsItemArr(5))
  
  const changeColors = (e: KeyboardEvent<HTMLElement >): void => {
    if (e.code.toLowerCase() === 'space') {
      e.preventDefault()
      setColorsItemArr((prevColors) => resetColors(prevColors));
    }
  }

  const toggleLock = (id: string) => {
    setColorsItemArr((prevColors) => toggleSelectedState(prevColors, id));
  }
  
  useEffect(() => {
    setColorsToHash(colorsItemArr);
  }, [colorsItemArr])
  
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
