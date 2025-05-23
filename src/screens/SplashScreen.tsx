import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/hero-1');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-primary">Welcome</h1>
      <Button 
        onClick={() => navigate('/hero-1')}
        className="w-full max-w-[280px] py-4"
      >
        Get Started
      </Button>
    </motion.div>
  );
}