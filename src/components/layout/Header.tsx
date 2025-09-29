'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <span className={styles.logoText}>Company</span>
          </Link>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/services" className={styles.navLink} onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.cta}>
          <Link href="/contact" className={styles.ctaButton}>
            Get Started
          </Link>
        </div>

        <button
          className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.mobileMenuButtonOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
