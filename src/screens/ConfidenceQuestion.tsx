import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/ui/navigation';
import { motion } from 'framer-motion';

export function ConfidenceQuestion() {
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
        <h1 className="text-[32px] font-normal text-center">How confident are you about your career path?</h1>
        <div className="flex flex-col gap-4 w-full">
          <Button 
            variant="outline"
            className="py-6 text-lg rounded-2xl"
            onClick={() => navigate('/loading')}
          >
            Very confident
          </Button>
          <Button 
            variant="outline"
            className="py-6 text-lg rounded-2xl"
            onClick={() => navigate('/loading')}
          >
            Somewhat confident
          </Button>
          <Button 
            variant="outline"
            className="py-6 text-lg rounded-2xl"
            onClick={() => navigate('/loading')}
          >
            Not sure yet
          </Button>
          <Button 
            variant="outline"
            className="py-6 text-lg rounded-2xl"
            onClick={() => navigate('/loading')}
          >
            Need guidance
          </Button>
        </div>
      </div>

      <Button 
        onClick={() => navigate('/loading')}
        className="w-full bg-black/10 text-black rounded-full py-4 text-[17px] font-medium"
      >
        Skip this question
      </Button>
    </motion.div>
  );
}