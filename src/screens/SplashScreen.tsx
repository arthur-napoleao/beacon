import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function SplashScreen() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setCurrentSlide(1), 2000),
      setTimeout(() => setCurrentSlide(2), 5000)
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const slides = [
    // Slide 0: Logo
    <motion.div
      key="slide0"
      className="flex flex-col items-center justify-center h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-[64px] font-normal text-black font-['PP_Editorial_New']">
        Beacon
      </h1>
    </motion.div>,

    // Slide 1: Meet Beacon
    <motion.div
      key="slide1"
      className="flex flex-col items-center justify-center h-full text-center px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-[32px] font-normal mb-4">Meet Beacon</h2>
      <p className="text-[20px] leading-[1.4] text-black/80 max-w-[280px]">
        The AI that grows with you – learning and evolving as you explore your career path.
      </p>
    </motion.div>,

    // Slide 2: Future You
    <motion.div
      key="slide2"
      className="flex flex-col items-center justify-between h-full px-6 py-12 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 flex flex-col gap-4 px-6 pt-20 overflow-hidden">
        <p className="text-black/20 text-lg">I want hands-on experience in environmental science, but I don't know any opportunities...</p>
        <p className="text-black/20 text-lg">I like graphic designs for fun, but I don't know if I can make a career out of that...</p>
        <p className="text-black/20 text-lg">I'm interested in psychology, but my parents want me to join a club for med...</p>
        <p className="text-black/20 text-lg">I've always been interested in therapy, but I don't know what careers are out there...</p>
        <p className="text-black/20 text-lg">I want to start a passion project, but unsure where to begin or if I have the right skills...</p>
      </div>
      
      <div className="z-10 text-center mb-auto pt-12">
        <h2 className="text-[32px] font-normal mb-2">Say hello to Beacon,</h2>
        <p className="text-[32px] font-normal">your Future You</p>
      </div>

      <motion.button
        className="z-10 w-full bg-black text-white rounded-full py-4 text-[17px] font-medium"
        onClick={() => navigate('/email')}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Get started
      </motion.button>
    </motion.div>
  ];

  return (
    <div className="h-full bg-white overflow-hidden">
      <AnimatePresence mode="wait">
        {slides[currentSlide]}
      </AnimatePresence>
    </div>
  );
}