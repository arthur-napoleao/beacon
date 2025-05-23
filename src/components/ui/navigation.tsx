import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeftIcon } from 'lucide-react';
import { Button } from './button';
import { motion } from 'framer-motion';

interface NavigationProps {
  showBack?: boolean;
  onBack?: () => void;
}

export function Navigation({ showBack = true, onBack }: NavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  // Don't show back button on the main screen
  if (location.pathname === '/') return null;

  return showBack ? (
    <motion.div 
      className="absolute top-0 left-0 w-full p-4 z-50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={handleBack}
        className="hover:bg-black/5 transition-colors"
        aria-label="Go back"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </Button>
    </motion.div>
  ) : null;
}