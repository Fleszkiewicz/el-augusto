'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { DATOS_HOSPEDAJE } from '@/data/hospedaje';
import { Waves, Compass, Trees } from 'lucide-react';

const ICONOS = {
    Waves: Waves,
    Compass: Compass,
    Trees: Trees,
};

export default function Actividades() {
    return (
        <section id="actividades" className="py-24 bg-[#fdfbf7]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3 block"
                    >
                        Experiencias & Entorno
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif font-bold text-[#1c241b] mb-4"
                    >
                        Vida al Aire Libre
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-stone-600 font-light"
                    >
                        El Augusto te ofrece una inmensa extensión de naturaleza y actividades pensadas para disfrutar cada momento del día.
                    </motion.p>
                </div>

                <div className="space-y-20">
                    {DATOS_HOSPEDAJE.actividades.map((actividad, index) => {
                        const IconoComponente = ICONOS[actividad.icono as keyof typeof ICONOS] || Trees;
                        const esPar = index % 2 === 0;

                        return (
                            <motion.div
                                key={actividad.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${esPar ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    } items-center gap-12 lg:gap-16`}
                            >
                                {/* Contenedor relativo de la imagen */}
                                <div className="w-full lg:w-1/2 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-200">
                                    <Image
                                        src={actividad.imagen}
                                        alt={actividad.titulo}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-700 hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>

                                <div className="w-full lg:w-1/2 space-y-4">
                                    <div className="inline-flex items-center justify-center p-3 bg-[#2d3a2b]/10 text-[#2d3a2b] rounded-2xl mb-2">
                                        <IconoComponente size={28} />
                                    </div>

                                    <h3 className="text-3xl font-serif font-bold text-[#1c241b]">
                                        {actividad.titulo}
                                    </h3>

                                    <p className="text-stone-600 font-light text-lg leading-relaxed">
                                        {actividad.descripcion}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}