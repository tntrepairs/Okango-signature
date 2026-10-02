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
            src="/images/okavango-logo-asset.png"
            alt="Okavango Signature"
            width={225}
            height={225}
            className={styles.logoImage}
            priority
          />
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
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.bagLink} aria-label="Reservation bag" onClick={closeMenu}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.bagIcon}>
                  <path d="M7 8h10l1 12H6L7 8Z" />
                  <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                </svg>
                <span>(0)</span>
              </Link>
            </li>
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
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.bagLink} aria-label="Reservation bag" onClick={closeMenu}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.bagIcon}>
                  <path d="M7 8h10l1 12H6L7 8Z" />
                  <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                </svg>
                <span>(0)</span>
              </Link>
            </li>
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
