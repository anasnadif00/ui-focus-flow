

interface DailyFocusBannerProps {
  totalBlocks: number;
  completedBlocks: number;
  totalPlannedMinutes: number;
  completedMinutes: number;
}

const DailyFocusBanner = ({ totalBlocks, completedBlocks, totalPlannedMinutes, completedMinutes }: DailyFocusBannerProps) => {
  const progress = totalBlocks > 0 ? completedBlocks / totalBlocks : 0;
  const hours = Math.floor(totalPlannedMinutes / 60);
  const remainingMins = totalPlannedMinutes % 60;
  const plannedLabel = hours > 0 ? `${hours}h ${remainingMins}m planned` : `${remainingMins}m planned`;

  return (
    <div className="relative bg-gradient-to-br from-white via-white to-[#f5f5f5] rounded-3xl border border-[#eee] p-6 mb-7 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      {/* Subtle decorative shapes */}
      <div className="absolute top-[-60px] right-[-40px] w-[200px] h-[200px] rounded-full border border-[#eee]/60" />
      <div className="absolute top-[-90px] right-[-60px] w-[260px] h-[260px] rounded-full border border-[#f0f0f0]/40" />
      <div className="absolute bottom-[-40px] left-[30%] w-[120px] h-[120px] rounded-full bg-[#fafafa]" />

      <div className="relative z-10 flex items-center gap-8">
        {/* Progress Ring */}
        <div className="relative flex-shrink-0">
          <svg width="100" height="100" viewBox="0 0 100 100" className="transform -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#f0f0f0" strokeWidth="6" />
            <circle
              cx="50" cy="50" r="42" fill="none"
              stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 42}
              strokeDashoffset={2 * Math.PI * 42 * (1 - progress)}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[20px] font-black text-[#1a1a1a] leading-none">{Math.round(progress * 100)}%</span>
            <span className="text-[9px] font-bold text-[#bbb] uppercase tracking-wider mt-0.5">today</span>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] font-bold text-[#999] bg-[#f0f0f0] px-2.5 py-0.5 rounded-md uppercase tracking-wider">Today's Goal</span>
            <span className="text-[11px] text-[#ccc]">·</span>
            <span className="text-[11px] text-[#bbb] font-medium">{plannedLabel}</span>
          </div>
          <h2 className="text-[18px] font-extrabold text-[#1a1a1a] leading-snug mb-1.5">
            {totalBlocks > 0
              ? `Complete ${totalBlocks} deep work block${totalBlocks !== 1 ? 's' : ''}`
              : 'No blocks planned yet'}
          </h2>
          <p className="text-[13px] text-[#aaa] leading-relaxed">
            {totalBlocks > 0 ? (
              <>
                You've finished <span className="font-bold text-[#1a1a1a]">{completedBlocks} of {totalBlocks}</span> blocks today.
                {completedBlocks < totalBlocks
                  ? ' Keep the momentum — your best focus hours are ahead.'
                  : ' Amazing work! All blocks completed! 🎉'}
              </>
            ) : (
              'Add a block to start tracking your focus time today.'
            )}
          </p>
        </div>

        {/* Right side mini stats */}
        <div className="flex-shrink-0 flex flex-col gap-3">
          <div className="flex items-center gap-3 bg-[#fafafa] rounded-xl px-4 py-2.5 border border-[#eee]/80">
            <span className="text-base">⏱️</span>
            <div>
              <p className="text-[14px] font-extrabold text-[#1a1a1a] leading-none">
                {Math.floor(completedMinutes / 60)}h {completedMinutes % 60}m
              </p>
              <p className="text-[10px] text-[#bbb] font-medium mt-0.5">Focused</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#fafafa] rounded-xl px-4 py-2.5 border border-[#eee]/80">
            <span className="text-base">🎯</span>
            <div>
              <p className="text-[14px] font-extrabold text-[#1a1a1a] leading-none">
                {Math.round(progress * 100)}%
              </p>
              <p className="text-[10px] text-[#bbb] font-medium mt-0.5">Completion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyFocusBanner;
