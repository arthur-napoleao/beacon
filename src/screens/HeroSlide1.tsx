import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function HeroSlide1() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/hero-2');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full p-6 bg-white"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center justify-center text-center max-w-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-primary">Meet Beacon</h1>
        <p className="text-xl text-gray-600 mb-8">
          The AI that grows with you – learning and evolving as you explore your career path.
        </p>
      </motion.div>
    </motion.div>
  );
}