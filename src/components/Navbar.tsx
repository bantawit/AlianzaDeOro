"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={`${styles.navbarWrapper} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.navbar} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <Link href="/" style={{ textDecoration: 'none' }} onClick={closeMenu}>
          <Logo />
        </Link>
        
        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/#galeria">Galería</Link></li>
          <li><Link href="/#carta">Carta</Link></li>
          <li><Link href="/#encargos">Encargos</Link></li>
          <li><Link href="/#contacto">Contacto</Link></li>
        </ul>
        
        <div className={styles.navActions}>
          <a href="tel:+34916450487" className={styles.btnCall}>
            RESERVAR
          </a>
          
          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuVisible : ''}`}>
          <ul className={styles.mobileNavLinks}>
            <li><Link href="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link href="/#galeria" onClick={closeMenu}>Galería</Link></li>
            <li><Link href="/#carta" onClick={closeMenu}>Carta</Link></li>
            <li><Link href="/#encargos" onClick={closeMenu}>Encargos</Link></li>
            <li><Link href="/#contacto" onClick={closeMenu}>Contacto</Link></li>
          </ul>
          <div className={styles.mobileActions}>
            <a href="tel:+34916450487" className={styles.btnCallMobile} onClick={closeMenu}>
              RESERVAR MESA
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
