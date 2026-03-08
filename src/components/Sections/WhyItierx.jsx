import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoModal from '../UI/VideoModal';

const WhyItierx = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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

                {/* Video Preview Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full aspect-video md:aspect-[21/9] bg-white/5 rounded-2xl border border-purple-vibrant/40 overflow-hidden group shadow-[0_0_80px_rgba(123,97,255,0.15)]"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                    
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                    >
                        <source src="https://player.vimeo.com/external/517627402.sd.mp4?s=d4520e50160b76927976e104f4476a6b579737e4&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                    </video>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setIsModalOpen(true)}
                            className="w-24 h-24 rounded-full bg-purple-vibrant/20 border border-purple-vibrant flex items-center justify-center cursor-pointer backdrop-blur-sm group/play transition-all hover:bg-purple-vibrant/40"
                        >
                            <Play className="text-white fill-white ml-1 transition-transform group-hover/play:scale-110" size={32} />
                        </motion.div>
                    </div>

                    <div className="absolute bottom-12 left-12 z-20">
                        <h3 className="text-2xl font-sans mb-2">Metodología de Impacto</h3>
                        <p className="font-mono text-xs text-white/80 uppercase tracking-widest">
                            Sistemas que deben funcionar.
                        </p>
                    </div>
                </motion.div>
            </div>

            <VideoModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                vimeoId="1171573189"
                title="ITIERX"
            />
        </section>
    );
};

export default WhyItierx;
