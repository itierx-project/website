import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const projects = [
    {
        title: "Neuro-Infraestructura 2026",
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        id: "project1"
    },
    {
        title: "Ciberseguridad Cuántica",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        id: "project2"
    },
    {
        title: "Sistemas Críticos AI",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
        id: "project3"
    }
];

const PortfolioModal = ({ isOpen, onClose }) => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % projects.length);
    const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] bg-black border border-white/10 rounded-tr-3xl rounded-bl-3xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-8 border-b border-white/5">
                            <div>
                                <h2 className="text-2xl font-sans font-light">Proyectos Destacados.</h2>
                                <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase">Casos de éxito y despliegues globales.</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-white/40 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Carousel Content */}
                        <div className="flex-1 relative group bg-black/50">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 flex flex-col md:flex-row"
                                >
                                    <div className="flex-1 relative overflow-hidden group/item">
                                        <img
                                            src={projects[index].thumbnail}
                                            alt={projects[index].title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className="w-16 h-16 rounded-full bg-purple-vibrant/20 border border-purple-vibrant flex items-center justify-center cursor-pointer backdrop-blur-sm shadow-[0_0_30px_rgba(123,97,255,0.4)]"
                                            >
                                                <Play className="fill-white text-white ml-1" size={24} />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-80 p-8 flex flex-col justify-center">
                                        <span className="font-mono text-[10px] text-purple-vibrant mb-2">0{index + 1} / 03</span>
                                        <h3 className="text-2xl font-sans font-light mb-4">{projects[index].title}</h3>
                                        <p className="font-mono text-sm text-white/40 leading-relaxed mb-8">
                                            Implementación de sistemas avanzados de alta disponibilidad para infraestructuras críticas.
                                        </p>
                                        <button className="text-xs font-mono tracking-widest uppercase border border-white/10 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all self-start">
                                            Ver Video
                                        </button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation */}
                            <button
                                onClick={prev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/5 bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-all z-20"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/5 bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-all z-20"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PortfolioModal;
