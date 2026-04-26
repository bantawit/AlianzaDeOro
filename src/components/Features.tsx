import React from 'react';
import styles from './Features.module.css';

export default function Features() {
  const categories = [
    {
      title: 'Obrador & Panadería',
      desc: 'Pan artesano elaborado cada día con procesos de larga fermentación y masa madre natural.',
      items: ['Masa Madre', 'Cereales', 'Baguettes'],
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Pastelería Fina',
      desc: 'Dulces tradicionales y repostería creativa para cualquier ocasión especial.',
      items: ['Tartas', 'Bollería', 'Pastas'],
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Restaurante',
      desc: 'Cocina casera honesta con los mejores productos de temporada y sabor mediterráneo.',
      items: ['Asados', 'Arroces', 'Carnes'],
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className={styles.section} id="nosotros">
      <div className={styles.container}>
        <span className={styles.subtitle}>Experiencia Gastronómica</span>
        <h2 className={styles.title}>Tradición en cada bocado</h2>
        <p className={styles.intro}>
          Combinamos el obrador tradicional con una cocina mediterránea honesta, creando un punto de encuentro para los amantes del buen comer en Fuenlabrada.
        </p>
        
        <div className={styles.grid}>
          {categories.map((cat, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={cat.image} alt={cat.title} className={styles.image} />
              </div>
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <p className={styles.cardDesc}>{cat.desc}</p>
                <ul className={styles.list}>
                  {cat.items.map((item, i) => (
                    <li key={i} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
