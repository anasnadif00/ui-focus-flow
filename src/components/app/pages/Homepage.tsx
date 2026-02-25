import React, { useEffect, useState } from 'react';
import AppLayout from '../layout/AppLayout';
import DailyFocusBanner from '../dashboard/DailyFocusBanner';
import ActiveSessionHero from '../dashboard/ActiveSessionHero';
import MotivationStrip from '../dashboard/MotivationStrip';
import StatsRow from '../dashboard/StatsRow';
import TimeBlockManager from '../dashboard/TimeBlockManager';
import WeeklyChart from '../dashboard/WeeklyChart';
import InsightsCard from '../dashboard/InsightsCard';
import RecentSessionsCard from '../dashboard/RecentSessionsCard';
import { useAuth } from '../../../hooks/useAuth';
import AddBlockModal from '../dashboard/AddBlockModal';

const Homepage = () => {

  const [hasActiveSession] = useState(true);
  const { user } = useAuth();
  const [showAddBlockModal, setShowAddBlockModal] = useState(false);

  const today = new Date();

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(today);

  return (
    <AppLayout 
      title={`Welcome back`} 
      subtitle={formattedDate}
      onAddBlock={() => setShowAddBlockModal(true)}
    >
      {showAddBlockModal && <AddBlockModal onClose={() => setShowAddBlockModal(false)} />}

      <DailyFocusBanner />
      
      {hasActiveSession && <ActiveSessionHero />}
      
      <MotivationStrip />
      
      <StatsRow />
      
      <div className="grid grid-cols-3 gap-5 mb-8">
        <TimeBlockManager />
        <WeeklyChart />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <InsightsCard />
        <RecentSessionsCard />
      </div>
    </AppLayout>
  );
};

export default Homepage;