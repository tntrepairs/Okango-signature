'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

const leftNavItems = [
  ['Collection', '/collection'],
  ['Story', '/story'],
  ['Journal', '/journal'],
];

const rightNavItems = [
  ['Contact', '/contact'],
  ['Reserve', '/contact'],
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.desktopNav} aria-label="Primary left navigation">
          <ul className={styles.navList}>
            {leftNavItems.map(([label, href]) => (
              <li className={styles.navItem} key={href}>
                <Link href={href} className={styles.navLink} onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/" className={styles.logoLink} onClick={closeMenu}>
          <Image
            src="/images/okavango-logo-transparent.png"
            alt=""
            width={96}
            height={96}
            className={styles.logoImage}
            priority
          />
          <span className={styles.logoText}>
            <strong>Okavango</strong>
            <span>Signature</span>
          </span>
        </Link>

        <nav className={`${styles.desktopNav} ${styles.rightNav}`} aria-label="Primary right navigation">
          <ul className={styles.navList}>
            {rightNavItems.map(([label, href]) => (
              <li className={styles.navItem} key={label}>
                <Link href={href} className={styles.navLink} onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {[...leftNavItems, ...rightNavItems].map(([label, href]) => (
              <li className={styles.navItem} key={`${label}-${href}`}>
                <Link href={href} className={styles.navLink} onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.mobileMenuButtonOpen : ''}`}
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </div>
    </header>
  );
};

export default Header;
