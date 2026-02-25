import React from 'react';

interface TopBarProps {
  title?: string;
  subtitle?: string;
  onAddBlock?: () => void;
}

const TopBar = ({ title = "Welcome back, Anas", subtitle = "Sunday, February 22", onAddBlock }: TopBarProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <p className="text-[13px] text-[#b5b5b5] font-medium mb-0.5">{subtitle}</p>
        <h1 className="text-[27px] font-extrabold text-[#1a1a1a] tracking-tight">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-4">
        {/* Prominent Add Block Button in Header */}
        <button 
          onClick={onAddBlock}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white rounded-xl text-[13px] font-bold hover:from-[#222] hover:to-[#333] transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.12)] active:scale-[0.97] cursor-pointer"
        >
          <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          Add Block
        </button>
        
        <button className="w-10 h-10 bg-white/80 backdrop-blur-sm border border-[#e8e8e8] rounded-xl flex items-center justify-center text-[#aaa] hover:text-[#555] hover:border-[#ccc] transition-all duration-300 shadow-[0_1px_4px_rgba(0,0,0,0.04)] cursor-pointer relative">
          <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-[#f5f5f5] animate-pulse" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
