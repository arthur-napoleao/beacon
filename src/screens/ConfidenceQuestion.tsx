import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function ConfidenceQuestion() {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="flex flex-col items-center justify-between h-full p-6"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <div className="w-full">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate('/interests')}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex flex-col items-center gap-8 w-full">
        <h1 className="text-2xl font-bold text-center">How confident are you about your career path?</h1>
        <div className="flex flex-col gap-4 w-full">
          <Button 
            variant="outline"
            className="py-6 text-lg"
            onClick={() => navigate('/loading')}
          >
            Very confident
          </Button>
          <Button 
            variant="outline"
            className="py-6 text-lg"
            onClick={() => navigate('/loading')}
          >
            Somewhat confident
          </Button>
          <Button 
            variant="outline"
            className="py-6 text-lg"
            onClick={() => navigate('/loading')}
          >
            Not sure yet
          </Button>
          <Button 
            variant="outline"
            className="py-6 text-lg"
            onClick={() => navigate('/loading')}
          >
            Need guidance
          </Button>
        </div>
      </div>

      <Button 
        onClick={() => navigate('/loading')}
        className="w-full py-4"
      >
        Skip
      </Button>
    </motion.div>
  );
}