'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DATOS_HOSPEDAJE } from '@/data/hospedaje';
import { Send, Phone, Mail } from 'lucide-react';

export default function ContactoFooter() {
    const [nombre, setNombre] = useState('');
    const [personas, setPersonas] = useState('2');
    const [mensaje, setMensaje] = useState('');

    const handleEnviarWhatsApp = (e: React.FormEvent) => {
        e.preventDefault();
        const texto = `Hola El Augusto! Mi nombre es ${nombre}. Somos ${personas} personas y quisiera consultar: ${mensaje}`;
        const url = `https://wa.me/${DATOS_HOSPEDAJE.contacto.whatsapp}?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');
    };

    return (
        <footer id="contacto" className="bg-[#1c241b] text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

                    {/* Información y Redes */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
                            ¿Listo para tu próxima escapada?
                        </h2>
                        <p className="text-stone-300 font-light text-lg">
                            Escribinos directamente para consultar disponibilidad, tarifas o resolver cualquier duda sobre las cabañas y actividades.
                        </p>

                        <div className="space-y-4 pt-4">
                            <a
                                href={`tel:${DATOS_HOSPEDAJE.contacto.telefono}`}
                                className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors"
                            >
                                <Phone size={20} className="text-[#a3b19b]" />
                                <span>{DATOS_HOSPEDAJE.contacto.telefono}</span>
                            </a>

                            <a
                                href={`mailto:${DATOS_HOSPEDAJE.contacto.email}`}
                                className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors"
                            >
                                <Mail size={20} className="text-[#a3b19b]" />
                                <span>{DATOS_HOSPEDAJE.contacto.email}</span>
                            </a>
                        </div>

                        {/* Redes Sociales */}
                        <div className="pt-6">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-400 mb-4">
                                Seguinos en redes
                            </h4>
                            <div className="flex gap-4">
                                <a
                                    href={DATOS_HOSPEDAJE.contacto.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                                    aria-label="Instagram"
                                >
                                    {/* Instagram SVG */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                </a>
                                <a
                                    href={DATOS_HOSPEDAJE.contacto.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                                    aria-label="Facebook"
                                >
                                    {/* Facebook SVG */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Formulario rápido a WhatsApp */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#2a3528] p-8 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        <h3 className="text-2xl font-serif font-bold mb-6">Enviar Consulta Directa</h3>

                        <form onSubmit={handleEnviarWhatsApp} className="space-y-4">
                            <div>
                                <label className="block text-xs uppercase text-stone-300 font-medium mb-2">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Tu nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    className="w-full bg-[#1c241b] border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-[#a3b19b]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs uppercase text-stone-300 font-medium mb-2">
                                    Cantidad de Personas
                                </label>
                                <select
                                    value={personas}
                                    onChange={(e) => setPersonas(e.target.value)}
                                    className="w-full bg-[#1c241b] border border-stone-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#a3b19b]"
                                >
                                    <option value="2">2 Personas</option>
                                    <option value="4">3 - 4 Personas</option>
                                    <option value="6">5 - 6 Personas</option>
                                    <option value="8+">8 o más Personas (Grupo/Familia)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs uppercase text-stone-300 font-medium mb-2">
                                    Consulta o Fecha estimada
                                </label>
                                <textarea
                                    rows={3}
                                    required
                                    placeholder="¿En qué fechas te gustaría venir?"
                                    value={mensaje}
                                    onChange={(e) => setMensaje(e.target.value)}
                                    className="w-full bg-[#1c241b] border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-[#a3b19b]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#40523e] hover:bg-[#4f644c] text-white py-3.5 rounded-xl font-medium transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                            >
                                <Send size={18} />
                                Enviar por WhatsApp
                            </button>
                        </form>
                    </motion.div>

                </div>

                {/* Línea divisoria y Copyright */}
                <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
                    <p>© {new Date().getFullYear()} {DATOS_HOSPEDAJE.nombre}. Todos los derechos reservados.</p>
                    <p>Baradero, Provincia de Buenos Aires, Argentina.</p>
                </div>

            </div>
        </footer>
    );
}