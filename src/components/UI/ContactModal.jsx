import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        window.location.href = `mailto:contacto@itierx.com?subject=Contacto desde Web - ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AEmail de contacto: ${email}`;
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-white/5 border border-white/10 p-8 md:p-12 rounded-tr-3xl rounded-bl-3xl shadow-2xl backdrop-blur-xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-3xl font-sans font-light mb-2">Hablemos.</h2>
                        <p className="font-mono text-xs text-white/40 mb-8 tracking-widest uppercase">
                            Cuéntanos sobre tu próximo desafío tecnológico.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2">Nombre</label>
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-purple-vibrant transition-colors"
                                    placeholder="Tu nombre..."
                                />
                            </div>

                            <div>
                                <label className="block font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2">Email</label>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-purple-vibrant transition-colors"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2">Mensaje</label>
                                <textarea
                                    required
                                    name="message"
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:border-purple-vibrant resize-none transition-colors"
                                    placeholder="¿En qué podemos ayudarte?"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(123, 97, 255, 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-purple-vibrant text-white font-mono text-xs tracking-[0.2em] uppercase py-4 rounded-tr-2xl rounded-bl-2xl shadow-[0_4px_14px_0_rgba(123,97,255,0.39)]"
                            >
                                Enviar Mensaje
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
