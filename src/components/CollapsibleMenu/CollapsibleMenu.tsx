import { FC, useState } from 'react';
import cx from 'classnames';
import styles from './CollapsibleMenu.module.css';
import { ICollapsibleMenuProps } from './CollapsibleMenu.props';
import ChevronIcon from '../Icons/ChevronIcon/ChevronIcon';

const CollapsibleMenu: FC<ICollapsibleMenuProps> = ({ className, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={cx(styles.container, className, { [styles.container_open]: isMenuOpen })}>
      <button type="button" className={styles.container__openBtn} onClick={() => toggleMenu()}>
        <ChevronIcon
          className={cx(styles.container__openBtnIcon, { [styles.container__openBtnIcon_open]: isMenuOpen })}
        />
      </button>
      {children}
    </div>
  );
};

export default CollapsibleMenu;
