import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/ui/navigation';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CareerCardProps {
  title: string;
  chips: string[];
  salary: string;
  growth: string;
  description: string;
  image: string;
  onClick: () => void;
}

function CareerCard({ title, chips, salary, growth, description, image, onClick }: CareerCardProps) {
  return (
    <motion.div 
      className="w-full bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6 space-y-4">
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
      </div>
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
      description: "Helps people work through emotions and life challenges in one-on-one sessions.",
      image: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg"
    },
    {
      title: "Public Defender",
      chips: ["Law", "Advocacy"],
      salary: "$64k avg",
      growth: "+9%",
      description: "Represents people in court who can't afford a private lawyer, often handling tough criminal cases.",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg"
    },
    {
      title: "Creative Director",
      chips: ["Design", "Communication"],
      salary: "$130k avg",
      growth: "+6%",
      description: "Leads design projects across branding, visuals, and campaigns for companies or artists.",
      image: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg"
    },
    {
      title: "Community Organizer",
      chips: ["People", "Change"],
      salary: "$45k avg",
      growth: "+13%",
      description: "Brings people together to push for local change through events, campaigns, and advocacy.",
      image: "https://images.pexels.com/photos/6592659/pexels-photo-6592659.jpeg"
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

        <div className="w-full">
          <Swiper
            modules={[SwiperNavigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full"
          >
            {careers.map((career, index) => (
              <SwiperSlide key={index}>
                <CareerCard 
                  {...career}
                  onClick={() => navigate(career.title === "Public Defender" ? '/defender' : '/profile')}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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