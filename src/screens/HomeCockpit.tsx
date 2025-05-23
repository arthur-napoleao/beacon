import React from 'react';
import { Navigation } from '@/components/ui/navigation';
import { motion } from 'framer-motion';

export function HomeCockpit() {
  return (
    <motion.div 
      className="flex flex-col h-full p-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation />
      
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-2xl font-bold">Home Cockpit</h1>
      </div>
    </motion.div>
  );
}