import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';
import Process from '@/components/Process';
import Featured from '@/components/Featured';
import DailySpecials from '@/components/DailySpecials';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      {/* 1. CONCEPTO: Introducción a la Experiencia Gastronómica */}
      <Features />

      {/* 2. IMPACTO VISUAL: La galería refuerza lo aprendido arriba */}
      <div className="reveal">
        <Gallery />
      </div>

      {/* 3. AUTORIDAD: Cómo lo hacemos (Nuestro Secreto) */}
      <div className="reveal">
        <Process />
      </div>

      {/* 4. PRODUCTO: Líneas de negocio concretas */}
      <div className="reveal">
        <Featured />
      </div>

      {/* 4.5 ESPECIALES: Menús del día */}
      <div className="reveal">
        <DailySpecials />
      </div>

      {/* 5. CONVERSIÓN: La Carta interactiva */}
      <div className="reveal">
        <Menu />
      </div>

      {/* 6. CONFIANZA: Prueba social para cerrar la venta */}
      <div className="reveal">
        <Reviews />
      </div>
    </main>
  );
}
