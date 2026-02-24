import React from 'react';

const RecentSessionsCard = () => {
  return (
    <div className="bg-gradient-to-br from-white to-[#fafafa] rounded-2xl p-6 border border-[#eee]/80 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[15px] font-bold text-[#1a1a1a]">Recent Sessions</h3>
        <button className="text-[12px] text-[#aaa] font-semibold hover:text-[#555] transition-colors duration-300 cursor-pointer">View all →</button>
      </div>
      <div className="space-y-0.5">
        {[
          { task: 'Auth Integration', time: '1h 15m', date: 'Yesterday', emoji: '🔐' },
          { task: 'Database Schema', time: '45m', date: 'Feb 20', emoji: '🗄️' },
          { task: 'UI Fixes', time: '30m', date: 'Feb 20', emoji: '🎨' },
          { task: 'API Endpoints', time: '2h 10m', date: 'Feb 19', emoji: '⚡' },
        ].map((s) => (
          <div key={s.task} className="flex items-center justify-between py-3 px-3 -mx-1 rounded-xl hover:bg-gradient-to-r hover:from-[#fafafa] hover:to-[#f5f5f5] transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="text-base w-6 text-center">{s.emoji}</span>
              <div>
                <p className="text-[13px] font-semibold text-[#1a1a1a]">{s.task}</p>
                <p className="text-[11px] text-[#ccc] font-medium">{s.date}</p>
              </div>
            </div>
            <span className="text-[13px] font-bold text-[#888] tabular-nums font-mono">{s.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSessionsCard;
