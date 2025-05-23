import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/ui/navigation';
import { motion } from 'framer-motion';

export function VerificationCode() {
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
        <h1 className="text-[32px] font-normal text-center">Verification complete</h1>
        
        <div className="flex gap-4 justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-black"></div>
          <div className="w-3 h-3 rounded-full bg-black"></div>
          <div className="w-3 h-3 rounded-full bg-black"></div>
          <div className="w-3 h-3 rounded-full bg-black"></div>
        </div>

        <p className="text-center text-gray-600">
          We've verified your email address
        </p>
      </div>

      <Button 
        onClick={() => navigate('/name')}
        className="w-full bg-black text-white rounded-full py-4 text-[17px] font-medium"
      >
        Continue
      </Button>
    </motion.div>
  );
}