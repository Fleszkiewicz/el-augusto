'use client';

import { motion } from 'framer-motion';
import { DATOS_HOSPEDAJE } from '@/data/hospedaje';
import { ChevronDown, MapPin } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900 text-white">
            {/* Fondo con Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop')`, // Imagen de prueba de campo/río
                }}
            >
                <div className="absolute inset-0 bg-black/45" />
            </div>

            {/* Contenido Central */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-sm mb-6 border border-white/20"
                >
                    <MapPin size={16} />
                    <span>{DATOS_HOSPEDAJE.ubicacion}</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 leading-tight"
                >
                    Naturaleza, tranquilidad y vista al río
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-8 font-light"
                >
                    Un refugio de campo ideal para desconectar. Cabañas amplias con vistas panorámicas, cabalgatas, canotaje y puro aire libre.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#cabanas"
                        className="w-full sm:w-auto bg-[#2d3a2b] hover:bg-[#1c241b] text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-lg text-center"
                    >
                        Ver Cabañas
                    </a>
                    <a
                        href={`https://wa.me/${DATOS_HOSPEDAJE.contacto.whatsapp}?text=Hola!%20Quiero%20consultar%20por%20un%20turno%20en%20El%20Augusto`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 px-8 py-3.5 rounded-full font-medium transition-all duration-300 text-center"
                    >
                        Consultar Fecha
                    </a>
                </motion.div>
            </div>

            {/* Indicador de Scroll Down */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80"
            >
                <a href="#sobre-nosotros" aria-label="Bajar a la siguiente sección">
                    <ChevronDown size={32} />
                </a>
            </motion.div>
        </section>
    );
}