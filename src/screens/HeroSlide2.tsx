import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function HeroSlide2() {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="flex flex-col items-center justify-between h-full p-6 bg-white"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex-1 flex flex-col items-center justify-center text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-primary">Say hello to Beacon,<br />your Future You</h1>
        <div className="text-gray-500 text-lg max-w-xs space-y-4 mb-8">
          <p className="opacity-40">I want hands-on experience in environmental science, but I don't know any opportunities...</p>
          <p className="opacity-60">I like graphic designs for fun, but I don't know if I can make a career out of that...</p>
          <p className="opacity-80">I'm interested in psychology, but my parents want me to join a club for med...</p>
        </div>
      </motion.div>
      
      <motion.div
        className="w-full"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <button
          onClick={() => navigate('/email')}
          className="w-full bg-black text-white rounded-full py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Get started
        </button>
      </motion.div>
    </motion.div>
  );
}