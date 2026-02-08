import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = '56994431092';
    const message = encodeURIComponent('Hola! Necesito información sobre los servicios de ITierX.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{
                scale: 1.1,
                boxShadow: "0 0 25px rgba(37, 211, 102, 0.4)"
            }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-24 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group transition-all duration-300"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                WhatsApp Directo
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
