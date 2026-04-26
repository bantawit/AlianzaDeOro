import React from 'react';
import styles from './Process.module.css';

const steps = [
  {
    id: '01',
    title: 'Ingredientes Naturales',
    desc: 'Seleccionamos harinas de gran calidad y materias primas locales para garantizar el mejor sabor.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '02',
    title: 'Masa Madre & Tiempo',
    desc: 'Fermentaciones lentas de más de 24 horas que aportan aromas únicos y mejor digestión.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '03',
    title: 'Horno de Leña',
    desc: 'El toque maestro: el calor del fuego real que da esa textura crujiente e inigualable.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="accent-text">Nuestro Secreto</span>
          <h2 className={styles.title}>El Arte del Buen Hacer</h2>
          <p className={styles.subtitle}>
            En Alianza de Oro, respetamos los tiempos de la naturaleza para ofrecerte un 
            producto honesto, saludable y con el sabor de siempre.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className={styles.realImage}
                />
                <div className={styles.overlay}></div>
                <span className={styles.number}>{step.id}</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
