import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Twitter, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';

const SocialModal = ({ isOpen, onClose }) => {
    const socials = [
        { name: 'LinkedIn', Icon: Linkedin, url: 'https://www.linkedin.com/company/itierx/' },
        { name: 'Facebook', Icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61587183754766' },
        { name: 'Instagram', Icon: Instagram, url: 'https://www.instagram.com/itierxspa/' },
    ];

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
                        className="relative w-full max-w-sm bg-white/5 border border-white/10 p-12 rounded-tr-3xl rounded-bl-3xl shadow-2xl backdrop-blur-xl text-center max-h-[90vh] overflow-y-auto"
                        data-lenis-prevent
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-3xl font-sans font-light mb-2">Síguenos.</h2>
                        <p className="font-mono text-xs text-white/40 mb-12 tracking-widest uppercase">
                            Únete a nuestra comunidad global.
                        </p>

                        <div className="flex justify-center gap-8">
                            {socials.map(({ name, Icon, url }, i) => (
                                <motion.a
                                    key={name}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.2, color: '#7B61FF' }}
                                    className="text-white/60 transition-colors"
                                >
                                    <Icon size={32} />
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
                                ITIERX • Ecosystem
                            </span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SocialModal;
