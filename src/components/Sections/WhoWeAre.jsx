import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhoWeAre = ({ onServiceClick }) => {
    const services = [
        {
            title: "01. Educación: Plataforma Lean Makers",
            shortTitle: "Educación",
            category: "Educación Superior y Corporativa",
            description: "Plataformas y metodologías para formar talento en entornos reales, medibles y escalables.",
            details: [
                { label: "Cumplimiento Normativo (Ley 21.091)", content: "Nuestra plataforma Lean Makers está diseñada específicamente para satisfacer los estándares de la Ley de Educación Superior, facilitando procesos de acreditación institucional." },
                { label: "Métricas de Calidad", content: "Generamos reportería avanzada y trazabilidad total del aprendizaje, permitiendo auditorías de calidad precisas y transparentes." },
                { label: "Metodología de \"Hacer\"", content: "Formamos talento en entornos reales, escalables y medibles que garantizan que el conocimiento se traduzca en ejecución técnica inmediata." }
            ],
            link: { label: "www.lean-makers.com", url: "https://www.lean-makers.com" }
        },
        {
            title: "02. Sistemas: Arquitecturas de Rendimiento Crítico",
            shortTitle: "Sistemas",
            category: "Sistemas Críticos",
            description: "Arquitecturas optimizadas para rendimiento crítico.",
            details: [
                { label: "Disponibilidad Absoluta", content: "Diseñamos sistemas capaces de procesar altos volúmenes de transacciones sin degradar la experiencia del usuario." },
                { label: "Escalabilidad Inteligente", content: "Arquitecturas que crecen orgánicamente con el negocio, optimizando el uso de recursos y reduciendo costos operativos." }
            ]
        },
        {
            title: "03. Seguridad: Concientización y Resiliencia (Ley 21.663)",
            shortTitle: "Seguridad",
            category: "Ciberseguridad y Resiliencia",
            description: "Ciberseguridad integrada desde la concepción.",
            details: [
                { label: "Plataforma de Concientización", content: "Entrenamos a tu equipo para ser la primera línea de defensa contra el phishing y ataques de ingeniería social, cumpliendo estrictamente con la Ley Marco de Ciberseguridad (Ley 21.663)." },
                { label: "Cultura de Seguridad", content: "Gestión de contraseñas, autenticación multifactor (MFA) y protocolos de respuesta ante incidentes bajo estándares internacionales (ISO 27001, NIS2)." },
                { label: "Protección del Activo", content: "Blindamos la información crítica mediante procesos integrados desde la concepción de cada sistema." }
            ]
        },
        {
            title: "04. IA Aplicada: Modelos Locales y Privacidad Total",
            shortTitle: "IA Aplicada",
            category: "Inteligencia Artificial",
            description: "Modelos neuronales diseñados para la ejecución real.",
            details: [
                { label: "Arquitecturas LLM y Bases de Datos Vectoriales", content: "Implementamos modelos de lenguaje avanzados y búsqueda semántica que comprenden el contexto de tu negocio." },
                { label: "Privacidad por Diseño", content: "Procesamos la información en entornos controlados (On-premise o Cloud privada), evitando que tus datos sensibles se filtren a servidores externos o modelos públicos." },
                { label: "IA de Ejecución Real", content: "Modelos neuronales optimizados para resolver problemas operativos específicos con alta precisión y seguridad de datos." }
            ]
        },
        {
            title: "05. Innovación Real: Transformación con Retorno",
            shortTitle: "Innovación Real",
            category: "Innovación y Resultados",
            description: "Transformación tecnológica enfocada en resultados.",
            details: [
                { label: "Foco en el Bottom-Line", content: "No innovamos por moda, sino para mejorar la eficiencia, reducir riesgos y abrir nuevas líneas de ingresos." },
                { label: "Resultados Medibles", content: "Cada implementación cuenta con indicadores de éxito claros para asegurar que la tecnología trabaje para el negocio y no al revés." }
            ]
        },
    ];

    return (
        <section id="soluciones" className="relative pt-12 pb-32 px-8 md:px-24 md:py-32 bg-black">
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
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => onServiceClick(service)}
                            className="group border-l border-white/10 pl-8 hover:border-purple-vibrant transition-colors duration-500 cursor-pointer"
                        >
                            <span className="font-mono text-[10px] text-white/80 uppercase tracking-[0.3em] mb-4 block">
                                0{index + 1}
                            </span>8
                            <h3 className="text-2xl md:text-3xl mb-4 group-hover:text-purple-vibrant transition-colors duration-500">
                                {service.shortTitle}
                                <span className="text-purple-vibrant text-[1.8em] group-hover:opacity-100 opacity-80 transition-opacity duration-500">
                                    .
                                </span>
                            </h3>
                            <p className="font-mono text-[14px] text-white/80 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
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
