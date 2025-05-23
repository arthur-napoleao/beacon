import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function InterestQuestion() {
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
          onClick={() => navigate('/school')}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex flex-col items-center gap-8 w-full">
        <h1 className="text-2xl font-bold text-center">What interests you most?</h1>
        <div className="grid grid-cols-2 gap-4 w-full">
          <Button 
            variant="outline"
            className="h-24 text-lg"
            onClick={() => navigate('/confidence')}
          >
            Technology
          </Button>
          <Button 
            variant="outline"
            className="h-24 text-lg"
            onClick={() => navigate('/confidence')}
          >
            Business
          </Button>
          <Button 
            variant="outline"
            className="h-24 text-lg"
            onClick={() => navigate('/confidence')}
          >
            Healthcare
          </Button>
          <Button 
            variant="outline"
            className="h-24 text-lg"
            onClick={() => navigate('/confidence')}
          >
            Arts
          </Button>
        </div>
      </div>

      <div className="w-full">
        <Button 
          onClick={() => navigate('/confidence')}
          className="w-full py-4"
        >
          Skip
        </Button>
      </div>
    </motion.div>
  );
}