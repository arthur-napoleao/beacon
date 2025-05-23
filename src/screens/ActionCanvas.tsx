import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/ui/navigation';
import { motion } from 'framer-motion';

export function ActionCanvas() {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="flex flex-col h-full p-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation />
      
      <div className="flex flex-col items-center justify-between flex-1">
        <h1 className="text-2xl font-bold mt-12">Action Canvas</h1>
        
        <Button 
          onClick={() => navigate('/explore')}
          className="w-full bg-black text-white rounded-full py-4 text-[17px] font-medium"
        >
          Explore Actions
        </Button>
      </div>
    </motion.div>
  );
}