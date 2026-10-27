'use client';

import { useState, useEffect } from 'react';
import { DATOS_HOSPEDAJE } from '@/data/hospedaje';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-[#fdfbf7]/80 backdrop-blur-md shadow-sm py-3'
                    : 'bg-gradient-to-b from-black/60 to-transparent py-5 text-white'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-2xl font-serif font-bold tracking-wide">
                    {DATOS_HOSPEDAJE.nombre}
                </a>

                {/* Links de navegación - Desktop */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#sobre-nosotros" className="hover:opacity-75 transition-opacity">
                        El Lugar
                    </a>
                    <a href="#cabanas" className="hover:opacity-75 transition-opacity">
                        Cabañas
                    </a>
                    <a href="#actividades" className="hover:opacity-75 transition-opacity">
                        Actividades
                    </a>
                    <a href="#ubicacion" className="hover:opacity-75 transition-opacity">
                        Ubicación
                    </a>
                </nav>

                {/* Botón CTA - Desktop */}
                <div className="hidden md:block">
                    <a
                        href={`https://wa.me/${DATOS_HOSPEDAJE.contacto.whatsapp}?text=Hola!%20Quiero%20consultar%20disponibilidad%20en%20El%20Augusto`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#2d3a2b] text-[#fdfbf7] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1c241b] transition-all duration-300 shadow-md"
                    >
                        <Phone size={16} />
                        Reservar / Consultar
                    </a>
                </div>

                {/* Menú Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg"
                    aria-label="Abrir menú"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Menú desplegable Mobile */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#fdfbf7] text-[#1c241b] px-6 py-6 space-y-4 border-b border-stone-200">
                    <a
                        href="#sobre-nosotros"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-lg font-medium"
                    >
                        El Lugar
                    </a>
                    <a
                        href="#cabanas"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-lg font-medium"
                    >
                        Cabañas
                    </a>
                    <a
                        href="#actividades"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-lg font-medium"
                    >
                        Actividades
                    </a>
                    <a
                        href="#ubicacion"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-lg font-medium"
                    >
                        Ubicación
                    </a>
                    <a
                        href={`https://wa.me/${DATOS_HOSPEDAJE.contacto.whatsapp}?text=Hola!%20Quiero%20consultar%20disponibilidad%20en%20El%20Augusto`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-[#2d3a2b] text-[#fdfbf7] py-3 rounded-xl font-medium mt-4"
                    >
                        Reservar por WhatsApp
                    </a>
                </div>
            )}
        </header>
    );
}