import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SobreNosotros from '@/components/SobreNosotros';
import Cabanas from '@/components/Cabanas';
import Actividades from '@/components/Actividades';
import Galeria from '@/components/Galeria';
import Ubicacion from '@/components/Ubicacion';
import ContactoFooter from '@/components/ContactoFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf7]">
      <Navbar />
      <Hero />
      <SobreNosotros />
      <Cabanas />
      <Actividades />
      <Galeria />
      <Ubicacion />
      <ContactoFooter />
    </main>
  );
}