import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Cabanas from '@/components/Cabanas';
import Actividades from '@/components/Actividades';
import Ubicacion from '@/components/Ubicacion';
import ContactoFooter from '@/components/ContactoFooter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Cabanas />
      <Actividades />
      <Ubicacion />
      <ContactoFooter />
    </main>
  );
}