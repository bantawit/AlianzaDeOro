import React from 'react';
import styles from './Gallery.module.css';

const galleryImages = [
  {
    id: 1,
    title: 'Nuestras Creaciones',
    image: '/iamgenes/WhatsApp Image 2026-04-26 at 18.53.00 (1).jpeg'
  },
  {
    id: 2,
    title: 'El Obrador',
    image: '/iamgenes/WhatsApp Image 2026-04-26 at 18.53.00 (3).jpeg'
  },
  {
    id: 3,
    title: 'Momentos Alianza',
    image: '/iamgenes/WhatsApp Image 2026-04-26 at 19.35.59 (5).jpeg'
  },
  {
    id: 4,
    title: 'Pasión por la Cocina',
    image: '/iamgenes/WhatsApp Image 2026-04-26 at 19.35.59 (7).jpeg'
  },
  {
    id: 5,
    title: 'Calidad Artesana',
    image: '/iamgenes/WhatsApp Image 2026-04-26 at 19.35.59 (8).jpeg'
  },
  {
    id: 6,
    title: 'Sabor de Siempre',
    image: '/iamgenes/WhatsApp Image 2026-04-26 at 19.36.00.jpeg'
  }
];

export default function Gallery() {
  return (
    <section className={styles.section} id="galeria">
      <div className="container text-center">
        <h2 className={styles.title}>Galería Alianza</h2>
        <p className={styles.subtitle}>Descubre nuestro universo</p>
      </div>

      <div className={styles.galleryContainer}>
        {galleryImages.map((item) => (
          <div key={item.id} className={styles.galleryItem}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.overlay}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
