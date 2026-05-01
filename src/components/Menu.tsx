"use client";
import React, { useState } from 'react';
import styles from './Menu.module.css';

import { menuData } from '@/data/menu';

export default function Menu() {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const isSearching = searchQuery.length > 0;

  const getAllResults = () => {
    if (!isSearching) {
      return [{
        category: activeCategory,
        items: menuData[activeCategory as keyof typeof menuData].filter(item => 
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.desc.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }];
    }

    return categories.map(cat => ({
      category: cat,
      items: menuData[cat as keyof typeof menuData].filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(group => group.items.length > 0);
  };

  const results = getAllResults();
  const totalResults = results.reduce((acc, group) => acc + group.items.length, 0);

  const navRef = React.useRef<HTMLDivElement>(null);

  const handleCategoryClick = (cat: string, e: React.MouseEvent) => {
    setActiveCategory(cat);
    (e.target as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  return (
    <section className={styles.section} id="carta">
      <div className={styles.header}>
        <span className={styles.subtitle}>Selección Gastronómica</span>
        <h1 className={styles.title}>Nuestra Carta</h1>
        
        <div className={styles.searchWrapper}>
          <div className={styles.inputContainer}>
            <input 
              type="text" 
              placeholder="¿Qué te apetece hoy?" 
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {isSearching && (
              <button 
                className={styles.clearSearchBtn} 
                onClick={() => setSearchQuery('')}
                title="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
          {isSearching && (
            <p className={styles.searchCount}>
              {totalResults === 0 ? 'No se encontraron resultados' : `Encontrados ${totalResults} resultados`}
            </p>
          )}
        </div>
      </div>

      {!isSearching && (
        <div className={styles.navWrapper}>
          <nav className={styles.nav} ref={navRef}>
            {categories.map((cat) => (
              <button 
                key={cat} 
                className={`${styles.navBtn} ${activeCategory === cat ? styles.navBtnActive : ''}`}
                onClick={(e) => handleCategoryClick(cat, e)}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      )}

      <div className={styles.resultsContainer}>
        {results.map((group) => (
          <div key={group.category} className={styles.categoryGroup}>
            <div className={styles.grid}>
              {group.items.map((item, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <span className={styles.price}>{item.price}</span>
                  </div>
                  <p className={styles.desc}>{item.desc}</p>
                  {item.allergen && <span className={styles.allergenTag}>Alérgenos: {item.allergen}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {isSearching && totalResults === 0 && (
          <div className={styles.noResults}>
            <p>Lo sentimos, no hemos encontrado ningún plato que coincida con tu búsqueda.</p>
            <button onClick={() => setSearchQuery('')} className={styles.clearBtn}>
              Ver toda la carta
            </button>
          </div>
        )}
      </div>

      <div className={styles.legalBox}>
        <p className={styles.legalText}>
          <strong>* IVA INCLUIDO</strong> en todos nuestros precios. <br />
          Disponemos de información completa sobre <strong>alérgenos</strong> para cada plato de nuestra carta. 
          Por favor, consulte con nuestro personal en caso de duda o intolerancia alimentaria.
        </p>
      </div>
    </section>
  );
}
