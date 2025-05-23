import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SplashScreen } from './screens/SplashScreen';
import { ScreenThree as EmailInput } from './screens/ScreenThree/ScreenThree';
import { NameInput } from './screens/NameInput';
import { SchoolInput } from './screens/SchoolInput';
import { InterestQuestion } from './screens/InterestQuestion';
import { ConfidenceQuestion } from './screens/ConfidenceQuestion';
import { LoadingAnalysis } from './screens/LoadingAnalysis';
import { ExploreCarousel } from './screens/ExploreCarousel';
import { ProfileDrawer } from './screens/ProfileDrawer';
import { ActionCanvas } from './screens/ActionCanvas';
import { MilestoneRail } from './screens/MilestoneRail';
import { HomeCockpit } from './screens/HomeCockpit';

function App() {
  return (
    <Router>
      <div className="w-full max-w-[393px] h-[852px] mx-auto relative bg-white overflow-hidden rounded-[40px]">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/email" element={<EmailInput />} />
            <Route path="/name" element={<NameInput />} />
            <Route path="/school" element={<SchoolInput />} />
            <Route path="/interests" element={<InterestQuestion />} />
            <Route path="/confidence" element={<ConfidenceQuestion />} />
            <Route path="/loading" element={<LoadingAnalysis />} />
            <Route path="/explore" element={<ExploreCarousel />} />
            <Route path="/profile" element={<ProfileDrawer />} />
            <Route path="/action-canvas" element={<ActionCanvas />} />
            <Route path="/milestones" element={<MilestoneRail />} />
            <Route path="/home" element={<HomeCockpit />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}