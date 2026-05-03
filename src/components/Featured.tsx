import styles from './Featured.module.css';

export default function Featured() {
  return (
    <section className={styles.section} id="encargos">
      <div className={styles.container}>
        <div className={`${styles.imageWrapper} reveal`}>
          <div className={styles.imageDecor}></div>
          <div className={styles.mainImageContainer}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Roscon_de_Reyes.jpg/1280px-Roscon_de_Reyes.jpg" 
              alt="Roscón Artesano Alianza de Oro" 
              className={styles.mainImage}
            />
            <div className={styles.floatingBadge}>
              <span className={styles.badgeTop}>Nuestra</span>
              <span className={styles.badgeBottom}>JOYA</span>
            </div>
          </div>
        </div>
        
        <div className={`${styles.content} reveal delay-2`}>
          <div className={styles.headerBox}>
            <span className={styles.accent}>Desde 1975</span>
            <h2 className={styles.title}>
              El Roscón que <br /> 
              <span>enamoró</span> a Fuenlabrada
            </h2>
          </div>
          
          <p className={styles.description}>
            No es solo para Navidad. Nuestro Roscón es famoso por su masa de larga fermentación, 
            aroma natural de azahar y nuestra mítica nata montada pura. Una receta familiar 
            que guardamos como nuestro mayor tesoro.
          </p>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>✨</span>
              <p>Masa Madre Natural</p>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🥛</span>
              <p>Nata 100% Pura</p>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🌿</span>
              <p>Sin Aditivos</p>
            </div>
          </div>
          
          <a href="https://wa.me/34665829352" className={styles.ctaBtn}>
            ENCARGAR AHORA
            <span className={styles.ctaArrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
