import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/ui/navigation';
import { motion } from 'framer-motion';

interface StatBlockProps {
  label: string;
  value: string;
}

function StatBlock({ label, value }: StatBlockProps) {
  return (
    <div className="flex-1 text-center">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-sm text-black/60">{label}</div>
    </div>
  );
}

interface TimelineItemProps {
  time: string;
  title: string;
  sub: string;
}

function TimelineItem({ time, title, sub }: TimelineItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="text-sm font-medium text-black/60 min-w-[60px]">{time}</div>
      <div className="flex-1">
        <div className="font-medium">{title}</div>
        <div className="text-sm text-black/60">{sub}</div>
      </div>
    </div>
  );
}

export function DefenderDeepDive() {
  const navigate = useNavigate();

  const coreSkills = [
    "Trial advocacy",
    "Legal research",
    "Client counselling",
    "Negotiation",
    "Stress management",
    "Time-boxed writing"
  ];

  const timeline = [
    { time: "8:00", title: "Client intake", sub: "Meet new defendants, hear their story." },
    { time: "10:00", title: "Court hearings", sub: "Argue bail, plea deals, motions." },
    { time: "13:00", title: "Case research", sub: "Dig through evidence & precedents." },
    { time: "16:00", title: "Prep tomorrow", sub: "Draft motions, strategy, witness lists." },
    { time: "18:30", title: "Team huddle", sub: "Debrief tough cases, share wins." }
  ];

  const challenges = [
    "High caseloads and tight deadlines.",
    "Emotional weight of severe charges.",
    "Limited investigative resources compared with private counsel.",
    "Balancing empathy with legal objectivity."
  ];

  const lifestyle = [
    "Court hours + evening prep; 50–55 hrs typical.",
    "Public-sector benefits but slower pay growth.",
    "You'll build resilience and public-speaking skills fast.",
    "Wins are tangible—lives impacted."
  ];

  const journey = [
    { year: "HS", text: "Volunteered at youth legal clinic; sparked justice interest." },
    { year: "College", text: "Double-majored in Pol-Sci & Criminology; mock-trial captain." },
    { year: "Law school", text: "Interned at Public Defender Service; loved courtroom pace." },
    { year: "Now", text: "Handles 30+ felony cases / yr, mentors interns." }
  ];

  return (
    <motion.div 
      className="flex flex-col h-full bg-white relative overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navigation className="absolute top-0 left-0 right-0 z-10" />

      {/* Hero Banner */}
      <div className="relative h-64 flex-shrink-0">
        <img 
          src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg"
          alt="Courtroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
          <div className="text-sm text-white/80 mb-1">Explore •</div>
          <h1 className="text-3xl font-bold text-white">Public Defender</h1>
          <p className="text-white/90">Stand up for justice when it matters most.</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 px-4 py-6 pb-24">
        {/* Stats */}
        <div className="flex justify-between gap-4 bg-black/5 rounded-2xl p-6">
          <StatBlock label="Median salary" value="$64k/yr" />
          <StatBlock label="Growth rate" value="+9%" />
          <StatBlock label="Work style" value="Courtroom" />
        </div>

        {/* Core Skills */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Core skills</h2>
          <div className="grid grid-cols-2 gap-2">
            {coreSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-black/5 rounded-xl p-3 text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Daily Rhythm */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Daily rhythm</h2>
          <div className="flex flex-col gap-4">
            {timeline.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Biggest challenges</h2>
          <ul className="list-disc pl-4 space-y-2 text-black/80">
            {challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        {/* Lifestyle */}
        <div className="bg-black/5 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Lifestyle snapshot</h2>
          <ul className="space-y-2 text-black/80">
            {lifestyle.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Journey */}
        <div>
          <h2 className="text-xl font-semibold mb-4">How Ana's Future-Self got here</h2>
          <div className="space-y-4">
            {journey.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="font-bold min-w-[60px]">{step.year}</div>
                <div className="flex-1">{step.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="bg-black/5 rounded-2xl p-6">
          <blockquote className="text-lg italic mb-2">
            "I walk into court knowing someone's freedom depends on my voice. It's intense, but when a verdict comes back 'not guilty' and I see relief on a family's face—nothing compares."
          </blockquote>
          <div className="text-black/60">Jordan 2033 • Your Future Self</div>
        </div>
      </div>

      {/* Fixed CTA at bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button 
          onClick={() => navigate('/action-canvas')}
          className="w-full bg-black text-white rounded-full py-4 text-[17px] font-medium"
        >
          Start this Journey
        </Button>
      </div>
    </motion.div>
  );
}