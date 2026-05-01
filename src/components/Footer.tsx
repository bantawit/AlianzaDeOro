import styles from './Footer.module.css';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer} id="contacto">
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Logo variant="light" />
          <p>
            Tradición y calidad artesana en el corazón de Fuenlabrada desde 1975. 
            Somos una panadería, pastelería y restaurante familiar dedicados a 
            mantener vivo el sabor auténtico de lo hecho a mano, utilizando siempre 
            ingredientes naturales y el cariño de nuestro obrador.
          </p>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.61-1.47-2.11-2.43v6.19c.03 2.36-.73 4.8-2.67 6.16-1.58 1.11-3.66 1.39-5.46.88-1.7-.44-3.23-1.61-4.14-3.13-1.1-1.84-1.21-4.27-.3-6.19.83-1.78 2.58-3.14 4.53-3.46.2-.03.41-.05.61-.06v4.02c-.85.11-1.7.53-2.27 1.18-.62.71-.85 1.67-.7 2.59.13.9.68 1.74 1.5 2.18.84.45 1.88.46 2.72.01.8-.41 1.37-1.22 1.48-2.12.02-.17.03-.35.03-.52v-11.07z"></path></svg>
            </a>
          </div>
        </div>
        
        <div className={styles.infoCol}>
          <h3>Horario Oficial</h3>
          <ul>
            <li><strong>Lunes - Martes:</strong> 09:00 - 24:00</li>
            <li><strong>Miércoles:</strong> CERRADO</li>
            <li><strong>Jueves:</strong> 09:00 - 24:00</li>
            <li><strong>Viernes - Sábado:</strong> 09:00 - 02:00</li>
            <li><strong>Domingo:</strong> 09:00 - 24:00</li>
          </ul>
        </div>
        
        <div className={styles.contactCol}>
          <h3>Contacto</h3>
          <p>Urb. Parque Miraflores, 4<br />28942 Fuenlabrada, Madrid</p>
          <p className={styles.phone}>
            <a href="tel:+34916450487">+34 916 45 04 87</a>
          </p>
          <a href="https://maps.google.com/?q=Alianza+de+Oro+Fuenlabrada" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '1rem' }}>
            Ver en Google Maps
          </a>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className="container">
          <p>
            <span>&copy; {currentYear} Alianza de Oro. Todos los derechos reservados.</span>
            <span className={styles.developer}>Diseñado y desarrollado por <a href="https://www.synthiaops.com/" target="_blank" rel="noopener noreferrer">SynthiaOps</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
