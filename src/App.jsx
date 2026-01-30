import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Frame from './components/Layout/Frame';
import Hero from './components/Sections/Hero';
import LogoCarousel from './components/Sections/LogoCarousel';
import WhyItierx from './components/Sections/WhyItierx';
import WhoWeAre from './components/Sections/WhoWeAre';
import Contact from './components/Sections/Contact';
import ContactModal from './components/UI/ContactModal';
import SocialModal from './components/UI/SocialModal';
import PortfolioModal from './components/UI/PortfolioModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);

  useEffect(() => {
    // ... same lenis code ...
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-purple-vibrant/30">
      <Frame />
      <Sidebar />
      <Navbar onContactClick={() => setIsModalOpen(true)} />

      <main className="pl-0 md:pl-20">
        <Hero
          onFollowClick={() => setIsSocialModalOpen(true)}
          onLearnMoreClick={() => setIsPortfolioModalOpen(true)}
        />
        <LogoCarousel />
        <WhyItierx />
        <WhoWeAre />
        <Contact onContactClick={() => setIsModalOpen(true)} />
        {/* Additional sections can go here */}
      </main>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <SocialModal isOpen={isSocialModalOpen} onClose={() => setIsSocialModalOpen(false)} />
      <PortfolioModal isOpen={isPortfolioModalOpen} onClose={() => setIsPortfolioModalOpen(false)} />

      {/* Background elements or noise overlay could go here */}
    </div>
  );
}

export default App;
