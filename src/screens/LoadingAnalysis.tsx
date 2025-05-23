import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function LoadingAnalysis() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/explore');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-full p-6 bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin" />
        <div className="space-y-4">
          <h1 className="text-[32px] font-['PP_Editorial_New']">Hold up... we're time traveling.</h1>
          <p className="text-[17px] text-black/60">
            Building future versions of you based on what you care about. This might take a sec.
          </p>
        </div>
      </div>
    </motion.div>
  );
}