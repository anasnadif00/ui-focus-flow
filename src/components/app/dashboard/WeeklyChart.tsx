import React from 'react';

const WeeklyChart = () => {
  return (
    <div className="col-span-1 bg-gradient-to-br from-white to-[#fbfbfb] rounded-2xl p-6 border border-[#eee]/80 shadow-[0_1px_4px_rgba(0,0,0,0.03)] h-fit">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[15px] font-bold text-[#1a1a1a]">This Week</h3>
        <span className="text-[11px] text-[#ccc] font-medium">Feb 16–22</span>
      </div>

      <div className="flex items-end gap-2 h-28 mb-4">
        {[
          { day: 'M', h: 65 },
          { day: 'T', h: 80 },
          { day: 'W', h: 45 },
          { day: 'T', h: 90 },
          { day: 'F', h: 70 },
          { day: 'S', h: 30 },
          { day: 'S', h: 50, active: true },
        ].map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
            <div
              className={`w-full rounded-lg transition-all duration-500 ${
                bar.active
                  ? 'bg-gradient-to-t from-[#1a1a1a] to-[#444] shadow-[0_2px_8px_rgba(0,0,0,0.12)]'
                  : 'bg-gradient-to-t from-[#eee] to-[#e4e4e4] hover:from-[#ddd] hover:to-[#d4d4d4]'
              }`}
              style={{ height: `${bar.h}%` }}
            />
            <span className={`text-[10px] font-bold ${bar.active ? 'text-[#1a1a1a]' : 'text-[#ccc]'}`}>
              {bar.day}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-[#f0f0f0]">
        <p className="text-[20px] font-extrabold text-[#1a1a1a]">12h 45m</p>
        <p className="text-[11px] text-[#bbb] font-medium">Total focus time</p>
      </div>
    </div>
  );
};

export default WeeklyChart;
