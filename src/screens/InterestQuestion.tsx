import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/ui/navigation';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Mic } from 'lucide-react';

export function InterestQuestion() {
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
        <div className="space-y-4 text-center">
          <h1 className="text-[32px] font-['PP_Editorial_New'] text-center">What fields are you curious about?</h1>
          <p className="text-[17px] text-black/60">
            Do you have a dream career or are you still figuring it out?
          </p>
        </div>
        
        <div className="relative w-full">
          <textarea 
            className="w-full min-h-[160px] text-lg bg-black/5 border-0 rounded-2xl p-4 resize-none"
            placeholder="I want to...."
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-4 right-4 text-black/60 hover:text-black"
          >
            <Mic className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <Button 
        onClick={() => navigate('/confidence')}
        className="w-full bg-black text-white rounded-full py-4 text-[17px] font-medium"
      >
        Continue
      </Button>
    </motion.div>
  );
}