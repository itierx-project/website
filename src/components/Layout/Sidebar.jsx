import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/itierx-logo.png';

const Sidebar = () => {
    return (
        <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:flex fixed left-0 top-0 bottom-0 w-20 flex-col items-center justify-between py-12 z-50 border-r border-white/10"
        >
            {/* Top: Logo with wordmark */}
            <div className="flex items-center justify-center px-4">
                <img src={logo} alt="IX" className="w-10 h-auto grayscale brightness-200" />
            </div>

            {/* Center: Vertical Rotated Text */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 whitespace-nowrap text-vertical transform rotate-180">
                    Sistemas Críticos • IA Aplicada • Ciberseguridad
                </span>
            </div>

            {/* Bottom: Pagination & Domain */}
            <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col gap-3">
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className={`w-1 h-1 rounded-full transition-all duration-500 ${i === 0 ? 'bg-purple-vibrant scale-125' : 'bg-white/20'}`}
                        />
                    ))}
                </div>
                <span className="text-[9px] font-mono text-white/60 tracking-widest transform -rotate-90 origin-center whitespace-nowrap mb-6">
                    itierx.com
                </span>
            </div>
        </motion.aside>
    );
};

export default Sidebar;
