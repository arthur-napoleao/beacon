import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/ui/navigation';
import { motion } from 'framer-motion';

export function InterestQuestion() {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="flex flex-col items-center justify-between h-full p-6 relative"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <Navigation />

      <div className="flex flex-col items-center gap-8 w-full mt-12">
        <h1 className="text-[32px] font-normal text-center">What interests you most?</h1>
        <div className="grid grid-cols-2 gap-4 w-full">
          <Button 
            variant="outline"
            className="h-24 text-lg rounded-2xl"
            onClick={() => navigate('/confidence')}
          >
            Technology
          </Button>
          <Button 
            variant="outline"
            className="h-24 text-lg rounded-2xl"
            onClick={() => navigate('/confidence')}
          >
            Business
          </Button>
          <Button 
            variant="outline"
            className="h-24 text-lg rounded-2xl"
            onClick={() => navigate('/confidence')}
          >
            Healthcare
          </Button>
          <Button 
            variant="outline"
            className="h-24 text-lg rounded-2xl"
            onClick={() => navigate('/confidence')}
          >
            Arts
          </Button>
        </div>
      </div>

      <Button 
        onClick={() => navigate('/confidence')}
        className="w-full bg-black/10 text-black rounded-full py-4 text-[17px] font-medium"
      >
        Skip this question
      </Button>
    </motion.div>
  );
}