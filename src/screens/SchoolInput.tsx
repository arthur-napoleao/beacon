import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Navigation } from '@/components/ui/navigation';
import { motion } from 'framer-motion';

export function SchoolInput() {
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
        <h1 className="text-[32px] font-normal text-center">Where do you study?</h1>
        <Input 
          className="text-lg text-center bg-black/5 border-0 h-14 rounded-2xl"
          defaultValue="Stanford University"
          placeholder="Enter your school"
        />
      </div>

      <Button 
        onClick={() => navigate('/interests')}
        className="w-full bg-black text-white rounded-full py-4 text-[17px] font-medium"
      >
        Confirm school
      </Button>
    </motion.div>
  );
}