'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const navItems = [
  ['Collection', '/collection'],
  ['Story', '/story'],
  ['Journal', '/journal'],
  ['Contact', '/contact'],
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink} onClick={closeMenu}>
          <span className={styles.logoMark} aria-hidden="true" />
          <span className={styles.logoText}>Okavango Signature</span>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navItems.map(([label, href]) => (
              <li className={styles.navItem} key={href}>
                <Link href={href} className={styles.navLink} onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className={styles.ctaButton}>
          Reserve
        </Link>

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
