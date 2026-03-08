import React from 'react';
import { motion } from 'framer-motion';

const WhyItierx = () => {
    return (
        <section id="metodologia" className="relative min-h-screen pt-32 pb-12 md:py-32 px-8 md:px-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="font-mono text-purple-vibrant text-xs tracking-widest uppercase mb-4 block">
                        The Advantage
                    </span>
                    <h2 className="text-4xl md:text-7xl mb-6">¿Por qué ITier<span className="text-purple-vibrant">X</span>?</h2>
                    <p className="font-mono text-white/60 text-lg">
                        Tu infraestructura = <span className="text-white">Tu ventaja competitiva silenciosa.</span>
                    </p>
                </motion.div>

                {/* Video / Visual Placeholder Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full aspect-video md:aspect-[21/9] bg-white/5 rounded-2xl border border-purple-vibrant/40 overflow-hidden group shadow-[0_0_80px_rgba(123,97,255,0.15)]"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                    <iframe
                        src="https://player.vimeo.com/video/1171573189?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        className="absolute top-0 left-0 w-full h-full opacity-90 transition-transform duration-700 group-hover:scale-105"
                        title="ITIERX"
                    ></iframe>

                    <div className="absolute bottom-12 left-12 z-20">
                        <h3 className="text-2xl font-sans mb-2">Metodología de Impacto</h3>
                        <p className="font-mono text-xs text-white/80 uppercase tracking-widest">
                            Sistemas que deben funcionar.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyItierx;
