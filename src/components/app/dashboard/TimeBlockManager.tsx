import React, { useState } from 'react';

const TimeBlockManager = () => {
  const [activeTab, setActiveTab] = useState<'today' | 'tomorrow'>('today');

  return (
    <div className="col-span-2">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-[#eef0f2] p-1 rounded-xl flex items-center shadow-inner">
            <button 
              onClick={() => setActiveTab('today')}
              className={`px-5 py-1.5 rounded-lg text-[13px] font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'today' 
                  ? 'bg-white text-[#1a1a1a] shadow-[0_2px_8px_rgba(0,0,0,0.08)]' 
                  : 'text-[#888] hover:text-[#555]'
              }`}
            >
              Today
            </button>
            <button 
              onClick={() => setActiveTab('tomorrow')}
              className={`px-5 py-1.5 rounded-lg text-[13px] font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'tomorrow' 
                  ? 'bg-white text-[#1a1a1a] shadow-[0_2px_8px_rgba(0,0,0,0.08)]' 
                  : 'text-[#888] hover:text-[#555]'
              }`}
            >
              Tomorrow
            </button>
          </div>
          {activeTab === 'today' && (
            <span className="bg-[#f0f0f0] text-[#999] text-[11px] font-bold px-2.5 py-1 rounded-lg">3</span>
          )}
        </div>
        
        <button className="inline-flex items-center gap-1.5 px-3 py-2 text-[#666] hover:text-[#1a1a1a] hover:bg-[#f5f5f5] rounded-xl text-[13px] font-bold transition-all duration-200 cursor-pointer">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
          Add to {activeTab === 'today' ? 'Today' : 'Tomorrow'}
        </button>
      </div>

      <div className="relative">
        {/* Timeline connector */}
        <div className="absolute left-[25px] top-[52px] bottom-[52px] w-[2px] bg-gradient-to-b from-[#1a1a1a] via-[#ddd] to-[#eee] rounded-full" />

        <div className="space-y-3 relative">
          
          {activeTab === 'today' ? (
            <>
              {/* Active Block */}
              <div className="bg-gradient-to-r from-[#f8f8f8] to-[#f4f4f4] border-2 border-[#1a1a1a] rounded-2xl p-5 flex justify-between items-center shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#333] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)] relative z-10">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] text-[15px]">Build Homepage Layout</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] font-bold text-[#1a1a1a] bg-[#e0e0e0] px-2 py-0.5 rounded-md">Active</span>
                      <span className="text-[11px] text-[#bbb] font-medium">· 40m planned</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 bg-[#e0e0e0] rounded-full h-1.5 overflow-hidden">
                    <div className="h-full rounded-full bg-[#1a1a1a]" style={{ width: '60%' }} />
                  </div>
                  <span className="text-[18px] font-black text-[#1a1a1a] tabular-nums font-mono">24:16</span>
                </div>
              </div>

              {/* Pending Block */}
              <div className="group bg-gradient-to-br from-white to-[#fcfcfc] border border-[#eee] rounded-2xl p-5 flex justify-between items-center hover:border-[#ddd] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f8f8f8] to-[#eee] border border-[#e0e0e0] flex items-center justify-center group-hover:border-[#bbb] transition-all duration-300 relative z-10">
                    <div className="w-3 h-3 rounded-full border-2 border-[#ccc] group-hover:border-[#888] transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] text-[15px]">API Refactoring</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] text-[#bbb] font-medium">60m planned</span>
                      <span className="text-[11px] text-[#ddd]">·</span>
                      <span className="text-[11px] text-[#bbb] font-medium">2:00 PM</span>
                    </div>
                  </div>
                </div>
                <button className="px-5 py-2.5 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white rounded-xl text-[13px] font-bold transition-all duration-300 shadow-md active:scale-[0.97] opacity-0 group-hover:opacity-100 cursor-pointer">
                  Start →
                </button>
              </div>

              {/* Completed Block */}
              <div className="bg-gradient-to-br from-white/70 to-[#fafafa]/50 border border-[#eee]/70 rounded-2xl p-5 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f5f5f5] to-[#eee] border border-[#e0e0e0] flex items-center justify-center relative z-10">
                    <svg className="w-5 h-5 text-[#bbb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#bbb] line-through text-[15px]">Design Landing Improvements</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] font-bold text-[#999] bg-[#f0f0f0] px-2 py-0.5 rounded-md">Done</span>
                      <span className="text-[11px] text-[#ccc] font-medium">· 45m · 10:30 AM</span>
                    </div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-[#ccc]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
            </>
          ) : (
            <>
              {/* Tomorrow's blocks (Placeholder for demonstration) */}
              <div className="group bg-gradient-to-br from-white to-[#fcfcfc] border border-[#eee] rounded-2xl p-5 flex justify-between items-center hover:border-[#ddd] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f8f8f8] to-[#eee] border border-[#e0e0e0] flex items-center justify-center group-hover:border-[#bbb] transition-all duration-300 relative z-10">
                    <div className="w-3 h-3 rounded-full border-2 border-[#ccc] group-hover:border-[#888] transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] text-[15px]">Weekly Sync Prep</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] text-[#bbb] font-medium">30m planned</span>
                      <span className="text-[11px] text-[#ddd]">·</span>
                      <span className="text-[11px] text-[#bbb] font-medium">9:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-white to-[#fcfcfc] border border-[#eee] rounded-2xl p-5 flex justify-between items-center hover:border-[#ddd] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f8f8f8] to-[#eee] border border-[#e0e0e0] flex items-center justify-center group-hover:border-[#bbb] transition-all duration-300 relative z-10">
                    <div className="w-3 h-3 rounded-full border-2 border-[#ccc] group-hover:border-[#888] transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] text-[15px]">Database Migrations</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] text-[#bbb] font-medium">90m planned</span>
                      <span className="text-[11px] text-[#ddd]">·</span>
                      <span className="text-[11px] text-[#bbb] font-medium">11:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty state aesthetic */}
              <div className="text-center py-6">
                <p className="text-[#bbb] text-[13px] font-medium">You have 2 blocks planned for tomorrow.</p>
              </div>
            </>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default TimeBlockManager;
