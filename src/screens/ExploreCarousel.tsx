import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/ui/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CareerCardProps {
  title: string;
  chips: string[];
  salary: string;
  growth: string;
  description: string;
  onClick: () => void;
}

function CareerCard({ title, chips, salary, growth, description, onClick }: CareerCardProps) {
  return (
    <motion.div 
      className="flex-shrink-0 w-[300px] bg-white rounded-2xl p-6 shadow-md space-y-4 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <h3 className="text-2xl font-['PP_Editorial_New']">{title}</h3>
      
      <div className="flex flex-wrap gap-2">
        {chips.map((chip, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-black/5 rounded-full text-sm"
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="text-sm text-black/60">
        {salary} • Growing {growth}
      </div>

      <p className="text-base text-black/80">
        {description}
      </p>
    </motion.div>
  );
}

export function ExploreCarousel() {
  const navigate = useNavigate();

  const careers = [
    {
      title: "Therapist",
      chips: ["Mental Health", "Listening"],
      salary: "$60k avg",
      growth: "+22%",
      description: "Helps people work through emotions and life challenges in one-on-one sessions."
    },
    {
      title: "Public Defender",
      chips: ["Law", "Advocacy"],
      salary: "$64k avg",
      growth: "+9%",
      description: "Represents people in court who can't afford a private lawyer, often handling tough criminal cases."
    },
    {
      title: "Creative Director",
      chips: ["Design", "Communication"],
      salary: "$130k avg",
      growth: "+6%",
      description: "Leads design projects across branding, visuals, and campaigns for companies or artists."
    },
    {
      title: "Community Organizer",
      chips: ["People", "Change"],
      salary: "$45k avg",
      growth: "+13%",
      description: "Brings people together to push for local change through events, campaigns, and advocacy."
    }
  ];

  return (
    <motion.div 
      className="flex flex-col h-full p-6 relative bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation />

      <div className="flex flex-col items-center gap-8 w-full mt-12">
        <div className="space-y-4 text-center">
          <h1 className="text-[32px] font-['PP_Editorial_New']">Explore your future</h1>
          <p className="text-[17px] text-black/60">
            Here are some paths that match your interests
          </p>
        </div>

        <div className="relative w-full">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {careers.map((career, index) => (
              <div key={index} className="snap-center">
                <CareerCard 
                  {...career}
                  onClick={() => navigate('/profile')}
                />
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 -left-3 transform -translate-y-1/2">
            <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-md">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 -right-3 transform -translate-y-1/2">
            <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-md">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-4">
        <Button 
          onClick={() => navigate('/home')}
          className="w-full bg-black text-white rounded-full py-4 text-[17px] font-medium"
        >
          Discover Opportunities
        </Button>
        <Button 
          variant="outline"
          onClick={() => navigate('/profile')}
          className="w-full rounded-full py-4 text-[17px] font-medium"
        >
          View Profile
        </Button>
      </div>
    </motion.div>
  );
}