import React from 'react';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
    const services = [
        { title: "Educación", description: "Platafomras y metodologías para formar talento en entornos reales, medibles y escalables." },
        { title: "Sistemas", description: "Arquitecturas optimizadas para rendimiento crítico." },
        { title: "Seguridad", description: "Ciberseguridad integrada desde la concepción." },
        { title: "IA Aplicada", description: "Modelos neuronales diseñados para la ejecución real." },
        { title: "Innovación Real", description: "Transformación tecnológica enfocada en resultados." },
    ];

    return (
        <section id="soluciones" className="relative py-32 px-8 md:px-24 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-5xl md:text-8xl mb-8">No vendemos <br /><span className="text-white/60">software genérico.</span></h2>
                    <div className="w-24 h-1 bg-purple-vibrant" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group border-l border-white/10 pl-8 hover:border-purple-vibrant transition-colors duration-500"
                        >
                            <span className="font-mono text-[10px] text-white/60 uppercase tracking-[0.3em] mb-4 block">
                                0{index + 1}
                            </span>
                            <h3 className="text-2xl md:text-3xl mb-4 group-hover:text-purple-vibrant transition-colors duration-500">
                                {service.title}
                                <span className="text-purple-vibrant text-[1.8em] group-hover:opacity-100 opacity-80 transition-opacity duration-500">
                                    .
                                </span>
                            </h3>
                            <p className="font-mono text-sm text-white/60 leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-vibrant/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default WhoWeAre;
