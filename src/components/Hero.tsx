import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}></div>
      <div className={styles.overlay}></div>
      
      <div className={styles.container}>
        <div className={styles.glassBox}>
          <span className={styles.badge}>Maestros Artesanos desde 1990</span>
          
          <h1 className={styles.title}>
            La Excelencia de nuestra Cocina
          </h1>
          
          <p className={styles.description}>
            Panadería, Pastelería y Restaurante unidos por un solo secreto: el cariño volcado en cada una de nuestras creaciones.
          </p>
          
          <Link href="/carta" className={styles.btnGold}>
            VER LA CARTA
          </Link>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Horario</span>
              <span className={styles.infoValue}>09:00 - 24:00</span>
              <span className={styles.infoValue} style={{ fontSize: '0.8rem', opacity: 0.6 }}>(Cerrado Miércoles)</span>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Ubicación</span>
              <span className={styles.infoValue}>Parque Miraflores, 4</span>
              <span className={styles.infoValue}>Fuenlabrada, Madrid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
