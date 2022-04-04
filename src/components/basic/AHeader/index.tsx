import styles from './index.less';
import React, { memo, useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { IHeaderConfig } from './schema';

const Header = memo((props: IHeaderConfig) => {
  const {
    cpName,
    bgColor,
    logo,
    logoText,
    fontSize,
    color,
    showMenuBtn,
    menuColor,
    height,
  } = props;
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header
      className={styles.header}
      style={{ backgroundColor: bgColor, height: height + 'px' }}
    >
      <div className={styles.logo}>
        <img src={logo && logo[0] && logo[0].url} alt={logoText} />
      </div>
      <div className={styles.title} style={{ fontSize, color }}>
        {logoText}
      </div>
      {showMenuBtn && (
        <>
          <div
            className={styles.menuIconWrap}
            onClick={toggleMenu}
            style={{ color: menuColor, borderColor: menuColor }}
          >
            <MenuOutlined />
          </div>
        </>
      )}
    </header>
  );
});

export default Header;
