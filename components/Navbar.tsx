'use client';

import { useState, useEffect } from 'react';
import { DATOS_HOSPEDAJE } from '@/data/hospedaje';
import { Menu, X, Phone, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-[#1c241b]/90 backdrop-blur-md border-b border-stone-800/60 py-3.5 shadow-xl text-stone-100'
                    : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6 text-white'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Isologotipo / Marca */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="p-2 rounded-full bg-[#2d3a2b] border border-stone-600/50 group-hover:bg-[#3d4f3b] transition-colors">
                        <Compass size={18} className="text-[#d8cebe]" />
                    </div>
                    <span className="text-2xl font-serif font-bold tracking-tight text-[#fdfbf7]">
                        {DATOS_HOSPEDAJE.nombre}
                    </span>
                </a>

                {/* Links de navegación con hover indicator */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide text-stone-200">
                    {[
                        { name: 'El Lugar', href: '#sobre-nosotros' },
                        { name: 'Cabañas', href: '#cabanas' },
                        { name: 'Actividades', href: '#actividades' },
                        { name: 'Galería', href: '#galeria' },
                        { name: 'Ubicación', href: '#ubicacion' },
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative hover:text-white transition-colors duration-300 py-1 group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#a3b19b] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Botón CTA - Desktop */}
                <div className="hidden md:block">
                    <a
                        href={`https://wa.me/${DATOS_HOSPEDAJE.contacto.whatsapp}?text=Hola!%20Quiero%20consultar%20disponibilidad%20en%20El%20Augusto`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#fdfbf7] hover:bg-[#e8e2d5] text-[#1c241b] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
                    >
                        <Phone size={14} />
                        Consultar
                    </a>
                </div>

                {/* Menú Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-white hover:text-stone-300 transition-colors"
                    aria-label="Abrir menú"
                >
                    {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Menú desplegable Mobile animado */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-[#1c241b] border-b border-stone-800 px-6 py-6 space-y-4 text-stone-200"
                >
                    <a href="#sobre-nosotros" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-serif">
                        El Lugar
                    </a>
                    <a href="#cabanas" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-serif">
                        Cabañas
                    </a>
                    <a href="#actividades" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-serif">
                        Actividades
                    </a>
                    <a href="#galeria" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-serif">
                        Galería
                    </a>
                    <a href="#ubicacion" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-serif">
                        Ubicación
                    </a>
                    <a
                        href={`https://wa.me/${DATOS_HOSPEDAJE.contacto.whatsapp}?text=Hola!%20Quiero%20consultar%20disponibilidad%20en%20El%20Augusto`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-[#2d3a2b] text-[#fdfbf7] py-3 rounded-xl font-medium mt-4 border border-stone-700"
                    >
                        Reservar por WhatsApp
                    </a>
                </motion.div>
            )}
        </header>
    );
}