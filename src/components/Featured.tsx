import styles from './Featured.module.css';

export default function Featured() {
  return (
    <section className={`section ${styles.section}`} id="encargos">
      <div className={`container ${styles.container}`}>
        <div className={`${styles.imageBox} reveal`}>
          <div className={styles.productTag}>El Favorito</div>
          <div className={styles.imagePlaceholder}>
            {/* Aquí puedes poner una imagen del Roscón */}
          </div>
        </div>
        
        <div className={`${styles.content} reveal delay-2`}>
          <span className="accent-text">Producto Destacado</span>
          <h2>Nuestra Especialidad: El Roscón Artesano</h2>
          <p>
            No es solo para Navidad. Nuestro Roscón de Reyes es famoso en toda Fuenlabrada 
            por su masa esponjosa, el aroma real de azahar y nuestra nata montada pura.
          </p>
          <ul className={styles.list}>
            <li>100% Mantequilla Natural</li>
            <li>Sin conservantes ni colorantes</li>
            <li>Receta familiar desde 1990</li>
          </ul>
          <a href="https://wa.me/34916450487" className="btn btn-primary">Reservar el tuyo</a>
        </div>
      </div>
    </section>
  );
}
