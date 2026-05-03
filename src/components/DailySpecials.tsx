"use client";
import React, { useState } from 'react';
import styles from './DailySpecials.module.css';

const DAILY_MENUS = [
  {
    day: 'Jueves',
    title: 'Menú del Jueves',
    price: '12,90€',
    image: '/iamgenes/WhatsApp Image 2026-05-02 at 17.30.25.jpeg',
    description: 'Nuestra propuesta semanal más esperada, con el sabor auténtico de siempre.',
    primeros: ['Paella Mixta', 'Ensaladilla Rusa', 'Revuelto de Morcilla', 'Espagueti Boloñesa'],
    segundos: ['Chuletas de Aguja', 'Filete de Pollo a la Plancha', 'Sepia Rebozada'],
    includes: 'Pan, 1 Bebida, Postre o Café',
    accent: 'Tradición'
  },
  {
    day: 'Sábado',
    title: 'Menú del Sábado',
    price: 'Menú Especial',
    image: '/iamgenes/WhatsApp Image 2026-05-02 at 17.30.40.jpeg',
    description: 'Una selección exclusiva para disfrutar del fin de semana con la mejor calidad.',
    primeros: ['Judías Blancas con Almejas', 'Ensalada César', 'Gambón a la Plancha', 'Setas Empanadas con Alioli'],
    segundos: ['Entrecote con Patatas', 'Pollo Asado', 'Salmón a la Plancha'],
    includes: 'Pan, 1 Bebida, Postre y Café',
    accent: 'Exclusivo'
  }
];

export default function DailySpecials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    // Restore scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.header}>
            <span className="accent-text">Nuestras Especialidades</span>
            <h2 className={styles.title}>Menús del Día</h2>
            <p className={styles.subtitle}>
              Diseñamos propuestas únicas cada semana para ofrecerte lo mejor de nuestra cocina.
            </p>
          </div>

          <div className={styles.grid}>
            {DAILY_MENUS.map((menu, index) => (
              <div key={index} className={`${styles.card} reveal delay-${index + 1}`}>
                <div 
                  className={styles.cardImageContainer} 
                  onClick={() => handleImageClick(menu.image)}
                  title="Haz clic para ampliar la imagen"
                >
                  <img src={menu.image} alt={menu.title} className={styles.cardImage} />
                  <div className={styles.imageOverlay}>
                    <span>Ver cartel completo</span>
                  </div>
                  <div className={styles.priceTag}>{menu.price}</div>
                  <div className={styles.dayBadge}>{menu.day}</div>
                </div>
                
                <div className={styles.cardContent}>
                  <span className={styles.menuAccent}>{menu.accent}</span>
                  <h3 className={styles.menuTitle}>{menu.title}</h3>
                  <p className={styles.menuDesc}>{menu.description}</p>
                  
                  <div className={styles.menuDetails}>
                    <div className={styles.menuSection}>
                      <h4>Primeros platos</h4>
                      <ul>
                        {menu.primeros.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                    
                    <div className={styles.divider}></div>
                    
                    <div className={styles.menuSection}>
                      <h4>Segundos platos</h4>
                      <ul>
                        {menu.segundos.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className={styles.footer}>
                    <p className={styles.includes}>
                      <strong>Incluye:</strong> {menu.includes}
                    </p>
                    <a href="https://wa.me/34665829352" className={styles.reserveBtn}>
                      Reservar mesa
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox}>✕</button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Menú Ampliado" className={styles.lightboxImage} />
          </div>
        </div>
      )}
    </>
  );
}
