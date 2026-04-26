import Navbar from '@/components/Navbar';
import styles from './encargos.module.css';

export default function Encargos() {
  return (
    <main>
      <Navbar />
      
      <header className={styles.header}>
        <div className="container">
          <span className="accent-text">Pedidos Especiales</span>
          <h1>Encargos Personalizados</h1>
          <p>Desde tartas de cumpleaños hasta asados tradicionales para llevar. Haz tu pedido con antelación.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.formContainer}>
              <h2 className={styles.title}>Solicita tu presupuesto</h2>
              <p className={styles.subtitle}>Cuéntanos qué necesitas y nos pondremos en contacto contigo lo antes posible.</p>
              
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre Completo</label>
                  <input type="text" id="name" name="name" placeholder="Tu nombre..." required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Teléfono de Contacto</label>
                  <input type="tel" id="phone" name="phone" placeholder="Tu número..." required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="type">Tipo de Encargo</label>
                  <select id="type" name="type">
                    <option value="tarta">Tarta Personalizada</option>
                    <option value="catering">Bandejas de Dulces/Salados</option>
                    <option value="asado">Asado (Cordero/Cochinillo)</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="date">Fecha de Recogida</label>
                  <input type="date" id="date" name="date" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="details">Detalles del pedido</label>
                  <textarea id="details" name="details" rows={4} placeholder="Especifique sabores, número de personas, alergias..."></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Enviar Solicitud</button>
              </form>
            </div>

            <div className={styles.infoContent}>
              <div className={styles.infoBlock}>
                <h3>Tartas & Pastelería</h3>
                <p>Nuestras tartas se elaboran de forma totalmente artesanal. Recomendamos realizar el pedido con un mínimo de <strong>48 horas de antelación</strong>.</p>
              </div>
              
              <div className={styles.infoBlock}>
                <h3>Asados por Encargo</h3>
                <p>Cocinamos en nuestro horno de leña para tus celebraciones en casa. Disponible para fines de semana bajo reserva de <strong>72 horas</strong>.</p>
              </div>
              
              <div className={styles.whatsappCard}>
                <h3>¿Prefieres WhatsApp?</h3>
                <p>Si tienes una duda rápida o quieres enviarnos una foto de referencia para tu tarta.</p>
                <a href="https://wa.me/34916450487" className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem' }}>
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
