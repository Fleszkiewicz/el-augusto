'use client';

import { motion } from 'framer-motion';
import { Trees, ShieldCheck, Sun } from 'lucide-react';

export default function SobreNosotros() {
    return (
        <section id="sobre-nosotros" className="py-24 bg-[#fdfbf7]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold block">
                            Bienvenidos a El Augusto
                        </span>

                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1c241b] leading-tight">
                            Un santuario natural pensado para la desconexión total
                        </h2>

                        <p className="text-stone-600 font-light text-lg leading-relaxed">
                            Ubicado en una posición privilegiada de Baradero, El Augusto no es solo un hospedaje: es un predio extenso diseñado para disfrutar del paisaje campestre, la brisa del río y momentos inolvidables en familia o con amigos.
                        </p>

                        {/* Grid de Puntos Fuertes */}
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-200">
                            <div>
                                <p className="text-3xl md:text-4xl font-serif font-bold text-[#2d3a2b]">4</p>
                                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium mt-1">Cabañas Equipada</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-serif font-bold text-[#2d3a2b]">100%</p>
                                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium mt-1">Vista al Río</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-serif font-bold text-[#2d3a2b]">+10ha</p>
                                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium mt-1">Campo Abierto</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cards de Experiencia */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 gap-4"
                    >
                        <div className="p-6 bg-[#f4f0ea] rounded-2xl border border-stone-200 flex items-start gap-4">
                            <div className="p-3 bg-[#2d3a2b] text-[#fdfbf7] rounded-xl shrink-0">
                                <Trees size={22} />
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-lg text-[#1c241b]">Flora & Vegetación</h4>
                                <p className="text-stone-600 text-sm font-light">Especies autóctonas, sombras amplias para mates y senderos naturales para caminar.</p>
                            </div>
                        </div>

                        <div className="p-6 bg-[#f4f0ea] rounded-2xl border border-stone-200 flex items-start gap-4">
                            <div className="p-3 bg-[#2d3a2b] text-[#fdfbf7] rounded-xl shrink-0">
                                <Sun size={22} />
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-lg text-[#1c241b]">Atardeceres Únicos</h4>
                                <p className="text-stone-600 text-sm font-light">Vistas panorámicas hacia el horizonte del río al caer la tarde.</p>
                            </div>
                        </div>

                        <div className="p-6 bg-[#f4f0ea] rounded-2xl border border-stone-200 flex items-start gap-4">
                            <div className="p-3 bg-[#2d3a2b] text-[#fdfbf7] rounded-xl shrink-0">
                                <ShieldCheck size={22} />
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-lg text-[#1c241b]">Privacidad & Seguridad</h4>
                                <p className="text-stone-600 text-sm font-light">Predio privado cerrado, ideal para la tranquilidad de familias con niños y mascotas.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}