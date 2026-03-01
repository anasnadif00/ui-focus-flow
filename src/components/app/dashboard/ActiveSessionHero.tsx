import { useState, useEffect } from 'react';
import type { TimeBlock } from '../../../types/TimeBlock';

interface ActiveSessionHeroProps {
  block: TimeBlock;
  onComplete: () => void;
}

const ActiveSessionHero = ({ block, onComplete }: ActiveSessionHeroProps) => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculate timer values
  const elapsed = block.actualStart
    ? Math.floor((now - new Date(block.actualStart).getTime()) / 1000)
    : 0;
  const totalSec = block.durationMinutes * 60;
  const remaining = Math.max(0, totalSec - elapsed);
  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const progress = Math.min(1, elapsed / totalSec);

  const startedAgo = block.actualStart
    ? Math.floor((now - new Date(block.actualStart).getTime()) / 60000)
    : 0;

  const timeLeftMinutes = Math.ceil(remaining / 60);

  return (
    <div className="relative rounded-[28px] mb-8 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35),0_8px_24px_-8px_rgba(0,0,0,0.2)]">
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#252525]" />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse 80% 50% at 30% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse 60% 80% at 70% 20%, rgba(255,255,255,0.03) 0%, transparent 60%)' }} />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse 40% 40% at 50% 80%, rgba(255,255,255,0.02) 0%, transparent 50%)' }} />
      {/* Red accent glow */}
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
            <span className="text-[12px] text-white/20 font-medium">
              Started {startedAgo}m ago
            </span>
          </div>

          <h2 className="text-[22px] font-bold text-white/90 mb-8 leading-tight">{block.title}</h2>

          <div
            className="text-[76px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 tracking-[0.12em] leading-none mb-6 font-mono tabular-nums"
            style={{ filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.08))' }}
          >
            {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
          </div>

          {/* Progress bar */}
          <div className="max-w-sm mb-2">
            <div className="w-full bg-white/[0.06] rounded-full h-[5px] overflow-hidden backdrop-blur-sm">
              <div
                className="h-full rounded-full bg-gradient-to-r from-white/80 via-white/60 to-white/40"
                style={{ width: `${progress * 100}%`, transition: 'width 1s ease' }}
              />
            </div>
          </div>
          <p className="text-[11px] text-white/20 font-medium mb-8">
            {Math.floor(elapsed / 60)} of {block.durationMinutes} minutes · {Math.round(progress * 100)}%
          </p>

          <div className="flex gap-3">
            <button
              onClick={onComplete}
              className="px-7 py-3 rounded-2xl border border-white/[0.08] text-white/40 font-semibold text-[13px] hover:border-white/20 hover:text-white/60 hover:bg-white/[0.04] transition-all duration-300 active:scale-[0.97] cursor-pointer flex items-center gap-2 backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2" /></svg>
              End Session
            </button>
          </div>
        </div>

        {/* Right — Session metadata */}
        <div className="w-[250px] border-l border-white/[0.04] p-8 flex flex-col justify-center bg-gradient-to-bl from-white/[0.02] to-transparent">
          <div className="space-y-6">
            {[
              { label: 'Category', value: block.category || 'General' },
              { label: 'Time Left', value: `${timeLeftMinutes} minutes` },
              { label: 'Session Type', value: 'Deep Work' },
              { label: 'Breaks Planned', value: `${block.breakCount ?? 0} × ${block.breakDuration ?? 5}m` },
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
  );
};

export default ActiveSessionHero;
