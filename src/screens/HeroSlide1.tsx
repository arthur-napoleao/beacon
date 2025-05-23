import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSlide1() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/hero-2');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full p-6"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-primary">Hero Slide 1</h1>
      <Button 
        onClick={() => navigate('/hero-2')}
        className="w-full max-w-[280px] py-4"
      >
        Continue
      </Button>
    </motion.div>
  );
}