import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSlide2() {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full p-6"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-primary">Hero Slide 2</h1>
      <Button 
        onClick={() => navigate('/email')}
        className="w-full max-w-[280px] py-4"
      >
        Start Onboarding
      </Button>
    </motion.div>
  );
}