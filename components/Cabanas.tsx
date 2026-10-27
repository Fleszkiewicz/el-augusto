'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { DATOS_HOSPEDAJE } from '@/data/hospedaje';
import { Users, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Cabanas() {
    return (
        <section id="cabanas" className="py-24 bg-[#f4f0ea]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Encabezado */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3 block"
                    >
                        Alojamiento & Confort
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif font-bold text-[#1c241b] mb-4"
                    >
                        Nuestras Cabañas
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-stone-600 font-light"
                    >
                        Espacios pensados para alojar a grupos y familias grandes, con todas las comodidades rodeadas del paisaje natural de Baradero.
                    </motion.p>
                </div>

                {/* Grilla de Cabañas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {DATOS_HOSPEDAJE.cabanas.map((cabana, index) => (
                        <motion.div
                            key={cabana.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-[#fdfbf7] rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {/* Contenedor relativo de imagen con aspect ratio fijado */}
                                <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-200">
                                    <Image
                                        src={cabana.imagen}
                                        alt={cabana.nombre}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-700 hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 z-10">
                                        <Users size={14} />
                                        <span>{cabana.capacidad}</span>
                                    </div>
                                </div>

                                {/* Detalles de la Cabaña */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-serif font-bold text-[#1c241b] mb-2">
                                        {cabana.nombre}
                                    </h3>
                                    <p className="text-stone-600 text-sm font-light mb-6 leading-relaxed">
                                        {cabana.descripcion}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        {cabana.caracteristicas.map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                                                <CheckCircle2 size={15} className="text-[#2d3a2b]" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Botón WhatsApp */}
                            <div className="p-6 pt-0">
                                <a
                                    href={`https://wa.me/${DATOS_HOSPEDAJE.contacto.whatsapp}?text=Hola!%20Quiero%20consultar%20disponibilidad%20para%20la%20${encodeURIComponent(cabana.nombre)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2d3a2b] hover:bg-[#1c241b] text-white py-3 rounded-xl text-sm font-medium transition-colors duration-300"
                                >
                                    <MessageCircle size={16} />
                                    Consultar Disponibilidad
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}