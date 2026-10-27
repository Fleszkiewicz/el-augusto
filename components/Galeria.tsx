'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { DATOS_HOSPEDAJE } from '@/data/hospedaje';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Galeria() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const galeria = DATOS_HOSPEDAJE.galeria;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % galeria.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + galeria.length) % galeria.length);
    };

    return (
        <section id="galeria" className="py-24 bg-[#1c241b] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Encabezado */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xs uppercase tracking-widest text-[#a3b19b] font-semibold mb-3 block"
                        >
                            Galería Fotográfica
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-serif font-bold text-[#fdfbf7]"
                        >
                            Capturas de El Augusto
                        </motion.h2>
                    </div>

                    {/* Controles del Carrusel */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={prevSlide}
                            className="p-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
                            aria-label="Imagen siguiente"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Visualizador Principal de Imagen */}
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 bg-stone-900 shadow-2xl mb-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={galeria[currentIndex].url}
                                alt={galeria[currentIndex].titulo}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                                sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                                <div>
                                    <p className="text-xs text-[#a3b19b] uppercase tracking-wider font-mono">
                                        {currentIndex + 1} / {galeria.length}
                                    </p>
                                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-white">
                                        {galeria[currentIndex].titulo}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mosaico de Miniaturas Interactivas */}
                <div className="grid grid-cols-6 gap-3">
                    {galeria.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${index === currentIndex
                                    ? 'border-[#a3b19b] scale-105 shadow-md'
                                    : 'border-transparent opacity-50 hover:opacity-100'
                                }`}
                        >
                            <Image
                                src={item.url}
                                alt={item.titulo}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="15vw"
                            />
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
}