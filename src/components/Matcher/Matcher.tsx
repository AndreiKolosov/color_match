import { FC, useState, KeyboardEvent } from 'react';
import styles from './Matcher.module.css';
import Column from '../Column/Column';
import { IColor } from '../../types/color';
import { createColorsArr, resetColors, toggleSelectedState } from './helpers';

const Matcher: FC = () => {
  const [colors, setColors] = useState<IColor[]>(createColorsArr(5))
  
  const changeColors = (e: KeyboardEvent<HTMLElement >): void => {
    if (e.code.toLowerCase() === 'space') {
      e.preventDefault()
      setColors((prevColors) => resetColors(prevColors))
    }
  }

  const toggleLock = (id: string) => {
    setColors((prevColors) => toggleSelectedState(prevColors, id))
  }
  
  
  return (
    <section className={styles.matcher} onKeyDown={(e) => changeColors(e)} tabIndex={0}>
      {/* <h1 className={styles.matcher__title}>Match The Color !</h1> */}
      <ul className={styles.matcher__colorsList}>
        {colors.map((color) => (
          <Column key={color.id} colorObj={color} onLockClick={toggleLock}/>
        ))}
      </ul>
      {/* <span className={styles.matcher__caption}>Press «space»</span> */}
    </section>
  );
};

export default Matcher;
