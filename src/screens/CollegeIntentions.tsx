import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/ui/navigation';
import { motion } from 'framer-motion';

export function CollegeIntentions() {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="flex flex-col items-center justify-between h-full p-6 relative bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <Navigation />

      <div className="flex flex-col items-center gap-8 w-full mt-12">
        <h1 className="text-[32px] font-['PP_Editorial_New'] text-center">
          Do you plan on going to college?
        </h1>
        
        <div className="flex flex-col gap-4 w-full">
          <Button 
            className="w-full py-6 text-lg rounded-2xl bg-black text-white hover:bg-black/90"
            onClick={() => navigate('/joyful-task')}
          >
            Yes
          </Button>
          <Button 
            variant="outline"
            className="w-full py-6 text-lg rounded-2xl bg-black/5 hover:bg-black/10"
            onClick={() => navigate('/joyful-task')}
          >
            No
          </Button>
        </div>
      </div>

      <Button 
        onClick={() => navigate('/joyful-task')}
        className="w-full bg-black text-white rounded-full py-4 text-[17px] font-medium"
      >
        Continue
      </Button>
    </motion.div>
  );
}