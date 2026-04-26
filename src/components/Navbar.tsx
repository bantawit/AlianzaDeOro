"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.navbarWrapper} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>
        
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
        </div>
      </nav>
    </div>
  );
}
