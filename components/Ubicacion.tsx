'use client';

import { motion } from 'framer-motion';
import { DATOS_HOSPEDAJE } from '@/data/hospedaje';
import { MapPin, Navigation, Compass } from 'lucide-react';

export default function Ubicacion() {
    return (
        <section id="ubicacion" className="py-24 bg-[#f4f0ea]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Información de Ubicación */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold block">
                            ¿Dónde estamos?
                        </span>

                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1c241b]">
                            Ubicación privilegiada sobre el río
                        </h2>

                        <p className="text-stone-600 font-light text-lg leading-relaxed">
                            El Augusto se encuentra en una zona tranquila y accesible de Baradero, Buenos Aires. Un predio extenso que combina la tranquilidad del campo con la vista panorámica al agua.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#2d3a2b]/10 text-[#2d3a2b] rounded-xl shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#1c241b]">Dirección & Ciudad</h4>
                                    <p className="text-stone-600 text-sm">{DATOS_HOSPEDAJE.ubicacion}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#2d3a2b]/10 text-[#2d3a2b] rounded-xl shrink-0">
                                    <Navigation size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#1c241b]">Fácil Acceso</h4>
                                    <p className="text-stone-600 text-sm">A pocos minutos del centro urbano de Baradero por caminos consolidado.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#2d3a2b]/10 text-[#2d3a2b] rounded-xl shrink-0">
                                    <Compass size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#1c241b]">Entorno Natural</h4>
                                    <p className="text-stone-600 text-sm">Amplio espacio verde, vegetación abundante y acceso directo al río.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href={DATOS_HOSPEDAJE.contacto.googleMaps}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#2d3a2b] hover:bg-[#1c241b] text-white px-6 py-3.5 rounded-full font-medium transition-all duration-300 shadow-md"
                            >
                                <MapPin size={18} />
                                Abrir en Google Maps
                            </a>
                        </div>
                    </motion.div>

                    {/* Mapa Interactivo de Google Maps (Iframe) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-[450px] rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-200 relative"
                    >
                        <iframe
                            title="Mapa El Augusto en Baradero"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8712318721245!2d-59.516667!3d-33.800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ4JzAwLjAiUyA1OcKwMzEnMDAuMCJX!5e0!3m2!1ses!2sar!4v1600000000000!5m2!1ses!2sar"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full grayscale-[20%] contrast-[95%]"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}