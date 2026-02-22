const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f8f8] via-[#f3f3f4] to-[#eeeef0] flex font-sans antialiased">

      {/* ─── Sidebar ─── */}
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

      {/* ─── Main ─── */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-[1080px] mx-auto px-8 py-4">

          {/* Top bar */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-[13px] text-[#b5b5b5] font-medium mb-0.5">Sunday, February 22</p>
              <h1 className="text-[27px] font-extrabold text-[#1a1a1a] tracking-tight">
                Welcome back, Anas
              </h1>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#e8e8e8] rounded-xl px-4 py-2.5 text-[#aaa] hover:border-[#ccc] transition-all duration-300 cursor-pointer shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <span className="text-[13px]">Search...</span>
                <kbd className="ml-3 bg-[#f0f0f0] text-[#bbb] rounded px-1.5 py-0.5 text-[10px] font-mono font-semibold">⌘K</kbd>
              </div>
              <button className="w-10 h-10 bg-white/80 backdrop-blur-sm border border-[#e8e8e8] rounded-xl flex items-center justify-center text-[#aaa] hover:text-[#555] hover:border-[#ccc] transition-all duration-300 shadow-[0_1px_4px_rgba(0,0,0,0.04)] cursor-pointer relative">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-[#f5f5f5] animate-pulse" />
              </button>
            </div>
          </div>

          {/* ─── Daily Focus Banner ─── */}
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
                    strokeDashoffset={2 * Math.PI * 42 * (1 - 0.5)}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[20px] font-black text-[#1a1a1a] leading-none">50%</span>
                  <span className="text-[9px] font-bold text-[#bbb] uppercase tracking-wider mt-0.5">today</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold text-[#999] bg-[#f0f0f0] px-2.5 py-0.5 rounded-md uppercase tracking-wider">Today's Goal</span>
                  <span className="text-[11px] text-[#ccc]">·</span>
                  <span className="text-[11px] text-[#bbb] font-medium">3h 20m planned</span>
                </div>
                <h2 className="text-[18px] font-extrabold text-[#1a1a1a] leading-snug mb-1.5">
                  Complete 3 deep work blocks
                </h2>
                <p className="text-[13px] text-[#aaa] leading-relaxed">
                  You've finished <span className="font-bold text-[#1a1a1a]">1 of 3</span> blocks today. Keep the momentum — your best focus hours are ahead.
                </p>
              </div>

              {/* Right side mini stats */}
              <div className="flex-shrink-0 flex flex-col gap-3">
                <div className="flex items-center gap-3 bg-[#fafafa] rounded-xl px-4 py-2.5 border border-[#eee]/80">
                  <span className="text-base">🔥</span>
                  <div>
                    <p className="text-[14px] font-extrabold text-[#1a1a1a] leading-none">5 days</p>
                    <p className="text-[10px] text-[#bbb] font-medium mt-0.5">Streak</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#fafafa] rounded-xl px-4 py-2.5 border border-[#eee]/80">
                  <span className="text-base">⚡</span>
                  <div>
                    <p className="text-[14px] font-extrabold text-[#1a1a1a] leading-none">87%</p>
                    <p className="text-[10px] text-[#bbb] font-medium mt-0.5">Focus Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Active Timer — HERO ─── */}
          <div className="relative rounded-[28px] mb-8 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35),0_8px_24px_-8px_rgba(0,0,0,0.2)]">
            {/* Layered gradient background — sfumato feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#252525]" />
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse 80% 50% at 30% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse 60% 80% at 70% 20%, rgba(255,255,255,0.03) 0%, transparent 60%)' }} />
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse 40% 40% at 50% 80%, rgba(255,255,255,0.02) 0%, transparent 50%)' }} />
            {/* Red accent glow — top edge */}
            <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
            <div className="absolute top-0 left-[20%] right-[20%] h-8 bg-gradient-to-b from-red-500/[0.06] to-transparent blur-sm" />
            {/* Dot pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            {/* Decorative corner rings */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-white/[0.03]" />
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-white/[0.02]" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full border border-white/[0.02]" />

            <div className="relative z-10 flex">
              {/* Left — Timer */}
              <div className="flex-1 p-10 pb-9">
                <div className="flex items-center gap-3 mb-7">
                  <div className="flex items-center gap-2 bg-red-500/[0.12] backdrop-blur-md border border-red-500/[0.15] rounded-full px-4 py-1.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-50" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                    </span>
                    <span className="text-[11px] font-bold text-red-400/80 uppercase tracking-[0.15em]">Live Session</span>
                  </div>
                  <span className="text-[12px] text-white/20 font-medium">Started 15m ago</span>
                </div>

                <h2 className="text-[22px] font-bold text-white/90 mb-8 leading-tight">Build Homepage Layout</h2>

                <div
                  className="text-[76px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 tracking-[0.12em] leading-none mb-6 font-mono tabular-nums"
                  style={{ filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.08))' }}
                >
                  24:16
                </div>

                {/* Progress bar */}
                <div className="max-w-sm mb-2">
                  <div className="w-full bg-white/[0.06] rounded-full h-[5px] overflow-hidden backdrop-blur-sm">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-white/80 via-white/60 to-white/40"
                      style={{ width: '60%', transition: 'width 1s ease' }}
                    />
                  </div>
                </div>
                <p className="text-[11px] text-white/20 font-medium mb-8">24 of 40 minutes · 60%</p>

                <div className="flex gap-3">
                  <button className="group px-7 py-3 rounded-2xl bg-gradient-to-b from-white to-[#f0f0f0] text-[#1a1a1a] font-bold text-[13px] transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.1),0_1px_3px_rgba(255,255,255,0.05)] hover:shadow-[0_6px_30px_rgba(255,255,255,0.15)] active:scale-[0.97] cursor-pointer flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
                    Pause
                  </button>
                  <button className="px-7 py-3 rounded-2xl border border-white/[0.08] text-white/40 font-semibold text-[13px] hover:border-white/20 hover:text-white/60 hover:bg-white/[0.04] transition-all duration-300 active:scale-[0.97] cursor-pointer flex items-center gap-2 backdrop-blur-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>
                    End Session
                  </button>
                </div>
              </div>

              {/* Right — Session metadata */}
              <div className="w-[250px] border-l border-white/[0.04] p-8 flex flex-col justify-center bg-gradient-to-bl from-white/[0.02] to-transparent">
                <div className="space-y-6">
                  {[
                    { label: 'Category', value: 'Development' },
                    { label: 'Time Left', value: '16 minutes' },
                    { label: 'Session Type', value: 'Deep Work' },
                    { label: 'Breaks Taken', value: '1 of 3' },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-[10px] font-bold text-white/15 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                      <p className="text-[14px] font-semibold text-white/60">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─── Motivation Strip ─── */}
          <div className="flex items-center gap-4 mb-8 px-1">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#e0e0e0] to-transparent" />
            <p className="text-[12px] text-[#bbb] font-medium italic whitespace-nowrap">
              "Deep work is the ability to focus without distraction on a cognitively demanding task."
            </p>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#e0e0e0] to-transparent" />
          </div>

          {/* ─── Stats Row ─── */}
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

          {/* ─── Blocks + Weekly ─── */}
          <div className="grid grid-cols-3 gap-5 mb-8">

            {/* Blocks */}
            <div className="col-span-2">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-[17px] font-extrabold text-[#1a1a1a]">Today's Blocks</h2>
                  <span className="bg-[#f0f0f0] text-[#999] text-[11px] font-bold px-2.5 py-1 rounded-lg">3</span>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white rounded-xl text-[13px] font-bold hover:from-[#222] hover:to-[#333] transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.12)] active:scale-[0.97] cursor-pointer">
                  <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                  Add Block
                </button>
              </div>

              <div className="relative">
                {/* Timeline connector */}
                <div className="absolute left-[25px] top-[52px] bottom-[52px] w-[2px] bg-gradient-to-b from-[#1a1a1a] via-[#ddd] to-[#eee] rounded-full" />

                <div className="space-y-3 relative">
                  {/* Active */}
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

                  {/* Pending */}
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

                  {/* Completed */}
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
                </div>
              </div>
            </div>

            {/* Weekly */}
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
          </div>

          {/* ─── Insights + Recent ─── */}
          <div className="grid grid-cols-2 gap-5">

            {/* Insights */}
            <div className="bg-gradient-to-br from-white to-[#fafafa] rounded-2xl p-6 border border-[#eee]/80 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
              <h3 className="text-[15px] font-bold text-[#1a1a1a] mb-4">Insights</h3>
              <div className="space-y-2.5">
                {[
                  { emoji: '📈', title: 'Productivity up 18%', desc: 'Blocks are being completed faster this week.' },
                  { emoji: '⏰', title: 'Peak focus: 9–11 AM', desc: 'Your deep work is most effective in the morning.' },
                  { emoji: '🎯', title: '5-day streak!', desc: 'You\'re building real consistency.' },
                ].map((insight) => (
                  <div key={insight.title} className="flex items-start gap-3 p-3.5 bg-gradient-to-r from-[#fafafa] to-[#f5f5f5] rounded-xl border border-[#eee]/50 hover:border-[#ddd] transition-all duration-300">
                    <span className="text-base mt-0.5">{insight.emoji}</span>
                    <div>
                      <p className="text-[13px] font-bold text-[#1a1a1a]">{insight.title}</p>
                      <p className="text-[12px] text-[#aaa] mt-0.5">{insight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent sessions */}
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
          </div>

        </div>
      </main>
    </div>
  );
};

export default Homepage;