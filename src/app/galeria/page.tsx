"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import styles from './galeria.module.css';

const GALLERY_IMAGES = [
  '/iamgenes/WhatsApp Image 2026-04-26 at 18.53.00 (1).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 18.53.00 (2).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 18.53.00 (3).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 18.53.00 (4).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 18.53.00 (5).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 18.53.00.jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 19.35.59 (1).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 19.35.59 (10).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 19.35.59 (2).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 19.35.59 (3).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 19.35.59 (4).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 19.35.59 (5).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 19.35.59 (6).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 19.35.59 (7).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 19.35.59 (8).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 19.35.59 (9).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 19.35.59.jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 19.36.00 (1).jpeg',
  '/iamgenes/WhatsApp Image 2026-04-26 at 19.36.00.jpeg',
  '/iamgenes/WhatsApp Image 2026-05-02 at 17.30.25.jpeg',
  '/iamgenes/WhatsApp Image 2026-05-02 at 17.30.40.jpeg',
];

export default function GaleriaPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % GALLERY_IMAGES.length);
    }
  }, [selectedIndex]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  return (
    <main>
      <Navbar />
      
      <header className={styles.header}>
        <div className="container">
          <span className="accent-text">Nuestro Universo Visual</span>
          <h1>Galería Completa</h1>
          <p>
            Descubre en imágenes la pasión que ponemos en cada detalle, 
            desde nuestro obrador artesano hasta nuestros platos más especiales.
          </p>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className={styles.grid}>
          {GALLERY_IMAGES.map((src, index) => (
            <div 
              key={index} 
              className={`${styles.imageWrapper} reveal delay-${(index % 3) + 1}`}
              onClick={() => openLightbox(index)}
            >
              <img 
                src={src} 
                alt={`Imagen de galería ${index + 1}`} 
                className={styles.image} 
                loading="lazy"
              />
              <div className={styles.overlay}>
                <span className={styles.icon}>🔍</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Cerrar">✕</button>
          
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevImage} aria-label="Anterior">
            ❮
          </button>
          
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img 
              src={GALLERY_IMAGES[selectedIndex]} 
              alt={`Imagen ampliada ${selectedIndex + 1}`} 
              className={styles.lightboxImage} 
            />
          </div>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextImage} aria-label="Siguiente">
            ❯
          </button>
        </div>
      )}
    </main>
  );
}
