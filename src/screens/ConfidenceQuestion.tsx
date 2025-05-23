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
        <h1 className="text-[32px] font-['PP_Editorial_New'] text-center">
          How confident are you in taking steps to explore or prepare for this career path?
        </h1>
        <div className="flex flex-col gap-4 w-full">
          <Button 
            variant="outline"
            className="py-6 text-lg rounded-2xl bg-black text-white hover:bg-black/90"
            onClick={() => navigate('/loading')}
          >
            <div className="text-left">
              <div className="font-medium">I'm very confident.</div>
              <div className="text-sm opacity-80">I know what steps to take to move forward.</div>
            </div>
          </Button>
          <Button 
            variant="outline"
            className="py-6 text-lg rounded-2xl bg-black/5 hover:bg-black/10"
            onClick={() => navigate('/loading')}
          >
            <div className="text-left">
              <div className="font-medium">I'm somewhat confident.</div>
              <div className="text-sm opacity-80">I have a general idea, but need more guidance.</div>
            </div>
          </Button>
          <Button 
            variant="outline"
            className="py-6 text-lg rounded-2xl bg-black/5 hover:bg-black/10"
            onClick={() => navigate('/loading')}
          >
            <div className="text-left">
              <div className="font-medium">I'm unsure...</div>
              <div className="text-sm opacity-80">I'm interested, but unsure what steps to take.</div>
            </div>
          </Button>
          <Button 
            variant="outline"
            className="py-6 text-lg rounded-2xl bg-black/5 hover:bg-black/10"
            onClick={() => navigate('/loading')}
          >
            <div className="text-left">
              <div className="font-medium">I'm not confident at all.</div>
              <div className="text-sm opacity-80">I don't know how to start preparing.</div>
            </div>
          </Button>
        </div>
      </div>

      <Button 
        onClick={() => navigate('/loading')}
        className="w-full bg-black text-white rounded-full py-4 text-[17px] font-medium"
      >
        Continue
      </Button>
    </motion.div>
  );
}