import React, { useState } from 'react';
import AppLayout from '../layout/AppLayout';
import DailyFocusBanner from '../dashboard/DailyFocusBanner';
import ActiveSessionHero from '../dashboard/ActiveSessionHero';
import MotivationStrip from '../dashboard/MotivationStrip';
import StatsRow from '../dashboard/StatsRow';
import TimeBlockManager from '../dashboard/TimeBlockManager';
import WeeklyChart from '../dashboard/WeeklyChart';
import InsightsCard from '../dashboard/InsightsCard';
import RecentSessionsCard from '../dashboard/RecentSessionsCard';
import AddBlockModal from '../dashboard/AddBlockModal';
import { useTimeBlocks } from '../../../hooks/useTimeBlocks';

const Homepage = () => {
  const [showAddBlockModal, setShowAddBlockModal] = useState(false);

  const {
    blocks,
    loading,
    authLoading,
    user,
    refresh,
    handleStart,
    handleComplete,
    handleDelete,
    handleSkip,
    activeBlock,
    todayBlocks,
    tomorrowBlocks,
    completedToday,
    totalPlannedMinutes,
    totalCompletedMinutes,
    recentCompleted,
  } = useTimeBlocks();

  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(today);

  if (authLoading) {
    return (
      <AppLayout title="Loading..." subtitle="">
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-[#1a1a1a] border-t-transparent rounded-full animate-spin" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout
      title="Welcome back"
      subtitle={formattedDate}
      onAddBlock={() => setShowAddBlockModal(true)}
    >
      {showAddBlockModal && (
        <AddBlockModal
          onClose={() => setShowAddBlockModal(false)}
          onCreated={refresh}
        />
      )}

      <DailyFocusBanner
        totalBlocks={todayBlocks.length}
        completedBlocks={completedToday.length}
        totalPlannedMinutes={totalPlannedMinutes}
        completedMinutes={totalCompletedMinutes}
      />

      {activeBlock && (
        <ActiveSessionHero
          block={activeBlock}
          onComplete={() => handleComplete(activeBlock.id)}
        />
      )}

      <MotivationStrip />

      <StatsRow
        totalPlannedMinutes={totalPlannedMinutes}
        completedMinutes={totalCompletedMinutes}
        totalBlocks={todayBlocks.length}
        completedBlocks={completedToday.length}
      />

      <div className="grid grid-cols-3 gap-5 mb-8">
        <TimeBlockManager
          todayBlocks={todayBlocks}
          tomorrowBlocks={tomorrowBlocks}
          onStart={handleStart}
          onComplete={handleComplete}
          onDelete={handleDelete}
          onSkip={handleSkip}
          onAddBlock={() => setShowAddBlockModal(true)}
          loading={loading}
        />
        <WeeklyChart blocks={blocks} />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <InsightsCard blocks={blocks} completedToday={completedToday} />
        <RecentSessionsCard recentBlocks={recentCompleted} />
      </div>
    </AppLayout>
  );
};

export default Homepage;