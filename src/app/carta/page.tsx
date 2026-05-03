import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import DailySpecials from '@/components/DailySpecials';
import styles from './carta.module.css';

export default function Carta() {
  return (
    <main>
      <Navbar />
      
      <header className={styles.header}>
        <div className="container">
          <span className="accent-text">Nuestra Selección Completa</span>
          <h1>La Carta de Alianza de Oro</h1>
          <p>
            Desde nuestro obrador artesano hasta nuestra cocina mediterránea. 
            Calidad, tradición y pasión en cada bocado.
          </p>
        </div>
      </header>

      <DailySpecials />

      <Menu />

      <section className={styles.ctaSection}>
        <div className="container text-center">
          <h2>¿Quieres hacer un encargo especial?</h2>
          <p>Preparamos tartas personalizadas y asados para tus celebraciones.</p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="https://wa.me/34665829352" className="btn btn-primary">Hacer un Encargo por WhatsApp</a>
            <a href="tel:+34916450487" className="btn btn-outline">Llamar para Reservar</a>
          </div>
        </div>
      </section>
    </main>
  );
}


