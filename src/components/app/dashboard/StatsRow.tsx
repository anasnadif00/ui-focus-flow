import React from 'react';

const StatsRow = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {[
        { label: 'Planned Today', value: '3h 20m', sub: '4 blocks', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
        { label: 'Completed', value: '1h 40m', sub: '1 block done', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" /></svg> },
        { label: 'Streak', value: '5 days', sub: 'Personal best!', icon: <span className="text-lg leading-none">🔥</span> },
        { label: 'Focus Score', value: '87%', sub: '↑ 4% vs last week', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
      ].map((stat) => (
        <div key={stat.label} className="bg-gradient-to-br from-white to-[#fafafa] rounded-2xl p-5 border border-[#eee]/80 hover:border-[#ddd] shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-default">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5f5f5] to-[#eee] flex items-center justify-center text-[#888] mb-3">
            {stat.icon}
          </div>
          <p className="text-[22px] font-extrabold text-[#1a1a1a] leading-tight">{stat.value}</p>
          <p className="text-[12px] text-[#999] font-medium mt-0.5">{stat.label}</p>
          <p className="text-[11px] text-[#ccc] font-medium mt-0.5">{stat.sub}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;
