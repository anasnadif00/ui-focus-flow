import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-[250px] bg-gradient-to-b from-white via-white to-[#fafafa] border-r border-gray-200/50 flex flex-col sticky top-0 h-screen">
      {/* Logo */}
      <div className="px-6 pt-8 pb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#1a1a1a] to-[#333] rounded-[14px] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.1)]">
            <span className="text-white text-[13px] font-black tracking-tight">FF</span>
          </div>
          <div>
            <span className="text-[16px] font-extrabold text-[#1a1a1a] tracking-tight block leading-none">Focus Flow</span>
            <span className="text-[10px] font-bold text-[#bbb] uppercase tracking-[0.2em] mt-0.5 block">Productivity</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 overflow-y-auto">
        <p className="text-[10px] font-bold text-[#d0d0d0] uppercase tracking-[0.18em] px-3 mb-2">Menu</p>
        <nav className="space-y-0.5 mb-8">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white font-semibold text-[13px] shadow-[0_4px_14px_rgba(0,0,0,0.15),0_1px_3px_rgba(0,0,0,0.08)] cursor-pointer">
            <svg className="w-[18px] h-[18px] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            Dashboard
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#aaa] hover:text-[#444] hover:bg-[#f5f5f5] font-medium text-[13px] cursor-pointer transition-all duration-300">
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            History
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#aaa] hover:text-[#444] hover:bg-[#f5f5f5] font-medium text-[13px] cursor-pointer transition-all duration-300">
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            Analytics
          </a>
        </nav>

        <p className="text-[10px] font-bold text-[#d0d0d0] uppercase tracking-[0.18em] px-3 mb-2">Account</p>
        <nav className="space-y-0.5">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#aaa] hover:text-[#444] hover:bg-[#f5f5f5] font-medium text-[13px] cursor-pointer transition-all duration-300">
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Settings
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#aaa] hover:text-[#444] hover:bg-[#f5f5f5] font-medium text-[13px] cursor-pointer transition-all duration-300">
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            Notifications
          </a>
        </nav>
      </div>

      {/* User */}
      <div className="p-4 border-t border-[#eee]">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-[#f7f7f7] to-[#f0f0f0] hover:from-[#f0f0f0] hover:to-[#eaeaea] cursor-pointer transition-all duration-300">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2a2a2a] to-[#444] flex items-center justify-center text-white text-sm font-bold shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-bold text-[#1a1a1a] truncate">Anas Nadif</p>
            <p className="text-[11px] text-[#bbb] font-medium">Pro Plan</p>
          </div>
          <svg className="w-4 h-4 text-[#ccc]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
