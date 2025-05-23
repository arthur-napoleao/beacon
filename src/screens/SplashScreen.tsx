import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/hero-1');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full p-6 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold mb-8 text-primary">Beacon</h1>
      </motion.div>
    </motion.div>
  );
}