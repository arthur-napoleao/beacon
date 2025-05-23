import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeftIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function NameInput() {
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
          onClick={() => navigate('/email')}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex flex-col items-center gap-8 w-full">
        <h1 className="text-2xl font-bold text-center">What's your name?</h1>
        <Input 
          className="text-lg text-center"
          defaultValue="Ana Silva"
        />
      </div>

      <Button 
        onClick={() => navigate('/school')}
        className="w-full py-4"
      >
        Continue
      </Button>
    </motion.div>
  );
}