"use client";
import React, { useRef, useState, useEffect } from 'react';
import styles from './Reviews.module.css';

const reviews = [
  { name: "Carlos Rodríguez", text: "El mejor pan de la zona. Los roscones son espectaculares y se nota que son artesanos.", rating: 5, date: "Hace 1 mes" },
  { name: "Elena Martínez", text: "Un sitio ideal para desayunar. La bollería es de verdad, nada de industrial. Trato de 10.", rating: 5, date: "Hace 2 semanas" },
  { name: "Juan Antonio", text: "Comida casera muy rica. El arroz con bogavante y los asados son su fuerte. Muy recomendable.", rating: 4, date: "Hace 3 meses" },
  { name: "Sofía García", text: "Encargamos una tarta de cumpleaños y nos sorprendió gratamente. Riquísima y preciosa.", rating: 5, date: "Hace 1 semana" },
  { name: "Miguel Ángel", text: "Panadería tradicional con mucha variedad. La atención es rápida y amable. Volveré seguro.", rating: 5, date: "Hace 1 mes" }
];

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const requestRef = useRef<number | null>(null);
  
  // Duplicamos las reviews para el efecto infinito
  const displayReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  const animate = () => {
    if (!isDragging) {
      setCurrentX((prevX) => {
        const nextX = prevX - 0.8; // Velocidad automática constante
        // Si ha recorrido la mitad del ancho (porque está duplicado), reiniciamos suavemente
        if (marqueeRef.current && Math.abs(nextX) >= marqueeRef.current.scrollWidth / 2) {
          return 0;
        }
        return nextX;
      });
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isDragging]); // isDragging remains as dependency, but we fix the quotes below

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - currentX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX - startX;
    setCurrentX(x);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - currentX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - startX;
    setCurrentX(x);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className={styles.section}>
      <div className="container text-center">
        <span className="accent-text">Experiencias Reales</span>
        <h2 className={styles.title}>Lo que dicen nuestros clientes</h2>
      </div>
      
      <div 
        className={styles.marqueeWrapper}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={containerRef}
      >
        <div 
          className={styles.marquee}
          ref={marqueeRef}
          style={{ 
            transform: `translateX(${currentX}px)`,
            transition: isDragging ? 'none' : 'transform 0.1s linear'
          }}
        >
          {displayReviews.map((review, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? styles.starFull : styles.starEmpty}>★</span>
                ))}
              </div>
              <p className={styles.text}>&quot;{review.text}&quot;</p>
              <div className={styles.footer}>
                <div className={styles.avatar}>{review.name.charAt(0)}</div>
                <div>
                  <h4 className={styles.name}>{review.name}</h4>
                  <span className={styles.date}>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container text-center" style={{ marginTop: '3rem' }}>
        <a href="https://www.google.com/maps/search/ALIANZA+DE+ORO" target="_blank" rel="noopener noreferrer" className={styles.googleLink}>
          Ver más reseñas en Google Maps
        </a>
      </div>
    </section>
  );
}
