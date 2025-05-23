import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function ExploreCarousel() {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="flex flex-col items-center justify-between h-full p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center gap-8 w-full">
        <h1 className="text-2xl font-bold text-center">Welcome, Ana!</h1>
        <p className="text-center text-secondary">
          Here are some opportunities that match your interests
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Button 
          onClick={() => navigate('/home')}
          className="w-full py-4"
        >
          Explore Opportunities
        </Button>
        <Button 
          variant="outline"
          onClick={() => navigate('/profile')}
          className="w-full py-4"
        >
          View Profile
        </Button>
      </div>
    </motion.div>
  );
}