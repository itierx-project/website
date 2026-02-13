import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ExternalLink } from 'lucide-react';

const ServiceModal = ({ isOpen, service, onClose, onInterestClick }) => {
    // Parent handles conditional rendering with AnimatePresence
    if (!service) return null;

    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />

            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative w-full max-w-4xl bg-black border border-white/10 rounded-tr-3xl rounded-bl-3xl overflow-hidden flex flex-col shadow-2xl max-h-[90vh]"
            >
                {/* Header - Matching Portfolio Style */}
                <div className="flex items-center justify-between p-8 border-b border-white/5">
                    <div>
                        <h2 className="text-2xl font-sans font-light">
                            {service.shortTitle}.
                        </h2>
                        <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
                            {service.category || "Información Detallada del Servicio."}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/40 hover:text-white transition-all hover:rotate-90"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content Area - Scrollable */}
                <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12 bg-zinc-900/20">
                    <div className="max-w-3xl">
                        <p className="font-mono text-lg text-white/80 leading-relaxed mb-12">
                            {service.description}
                        </p>

                        <div className="space-y-10">
                            {service.details.map((detail, index) => (
                                <div key={index} className="group">
                                    <h4 className="font-sans text-xl text-white mb-3 flex items-center gap-3">
                                        <span className="text-purple-vibrant text-sm font-mono">/</span>
                                        {detail.label}
                                    </h4>
                                    <p className="font-mono text-sm text-white/50 leading-relaxed pl-6 border-l border-white/10 group-hover:border-purple-vibrant transition-colors">
                                        {detail.content}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {service.link && (
                            <div className="mt-12 pt-8 border-t border-white/5">
                                <a
                                    href={service.link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 font-mono text-xs text-purple-vibrant hover:text-white transition-all uppercase tracking-widest group"
                                >
                                    <span className="underline underline-offset-8">{service.link.label}</span>
                                    <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        )}
                    </div>

                    {/* CTA Section */}
                    <div className="pt-12">
                        <motion.button
                            onClick={() => onInterestClick(service)}
                            whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(123, 97, 255, 0.4)" }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full md:w-auto flex items-center justify-center gap-4 bg-purple-vibrant text-white font-mono text-xs tracking-[0.2em] uppercase px-12 py-6 rounded-tr-3xl rounded-bl-3xl shadow-[0_4px_14px_0_rgba(123,97,255,0.39)] group"
                        >
                            Me interesa
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ServiceModal;
