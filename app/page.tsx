import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Sección temporal para probar el scroll */}
      <section id="sobre-nosotros" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold text-[#1c241b] mb-4">Un espacio único en Baradero</h2>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Próximamente agregaremos aquí la grilla interactiva de cabañas, las actividades al aire libre y el mapa de ubicación.
        </p>
      </section>
    </main>
  );
}