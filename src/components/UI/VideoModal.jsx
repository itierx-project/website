import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, vimeoId, title }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                        data-lenis-prevent
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 text-white/50 hover:text-white transition-colors p-2 bg-black/50 rounded-full backdrop-blur-md"
                        >
                            <X size={24} />
                        </button>

                        <iframe
                            src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=1`}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            className="w-full h-full"
                            title={title || "Video Player"}
                        ></iframe>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default VideoModal;
