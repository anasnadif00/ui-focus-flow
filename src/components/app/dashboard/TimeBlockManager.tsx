import { useState, useEffect } from 'react';
import type { TimeBlock } from '../../../types/TimeBlock';

interface TimeBlockManagerProps {
  todayBlocks: TimeBlock[];
  tomorrowBlocks: TimeBlock[];
  onStart: (id: string) => void;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onSkip: (id: string) => void;
  onAddBlock: () => void;
  loading: boolean;
}

const TimeBlockManager = ({
  todayBlocks,
  tomorrowBlocks,
  onStart,
  onDelete,
  onSkip,
  onAddBlock,
  loading,
}: TimeBlockManagerProps) => {
  const [activeTab, setActiveTab] = useState<'today' | 'tomorrow'>('today');

  const currentBlocks = activeTab === 'today' ? todayBlocks : tomorrowBlocks;

  const renderBlock = (block: TimeBlock) => {
    if (block.status === 'RUNNING') {
      return (
        <div
          key={block.id}
          className="bg-gradient-to-r from-[#f8f8f8] to-[#f4f4f4] border-2 border-[#1a1a1a] rounded-2xl p-5 flex justify-between items-center shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#333] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)] relative z-10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
              </span>
            </div>
            <div>
              <h3 className="font-bold text-[#1a1a1a] text-[15px]">{block.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] font-bold text-[#1a1a1a] bg-[#e0e0e0] px-2 py-0.5 rounded-md">Active</span>
                <span className="text-[11px] text-[#bbb] font-medium">· {block.durationMinutes}m planned</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RunningTimer block={block} />
          </div>
        </div>
      );
    }

    if (block.status === 'COMPLETED') {
      return (
        <div
          key={block.id}
          className="bg-gradient-to-br from-white/70 to-[#fafafa]/50 border border-[#eee]/70 rounded-2xl p-5 flex justify-between items-center"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f5f5f5] to-[#eee] border border-[#e0e0e0] flex items-center justify-center relative z-10">
              <svg className="w-5 h-5 text-[#bbb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
              <h3 className="font-semibold text-[#bbb] line-through text-[15px]">{block.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] font-bold text-[#999] bg-[#f0f0f0] px-2 py-0.5 rounded-md">Done</span>
                <span className="text-[11px] text-[#ccc] font-medium">
                  · {block.durationMinutes}m
                  {block.actualEnd && ` · ${new Date(block.actualEnd).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
                </span>
              </div>
            </div>
          </div>
          <svg className="w-5 h-5 text-[#ccc]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
        </div>
      );
    }

    if (block.status === 'SKIPPED') {
      return (
        <div
          key={block.id}
          className="bg-gradient-to-br from-white/70 to-[#fafafa]/50 border border-[#eee]/70 rounded-2xl p-5 flex justify-between items-center opacity-50"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f5f5f5] to-[#eee] border border-[#e0e0e0] flex items-center justify-center relative z-10">
              <svg className="w-5 h-5 text-[#ccc]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
            </div>
            <div>
              <h3 className="font-semibold text-[#bbb] line-through text-[15px]">{block.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] font-bold text-[#aaa] bg-[#f0f0f0] px-2 py-0.5 rounded-md">Skipped</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // SCHEDULED block
    return (
      <div
        key={block.id}
        className="group bg-gradient-to-br from-white to-[#fcfcfc] border border-[#eee] rounded-2xl p-5 flex justify-between items-center hover:border-[#ddd] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f8f8f8] to-[#eee] border border-[#e0e0e0] flex items-center justify-center group-hover:border-[#bbb] transition-all duration-300 relative z-10">
            <div className="w-3 h-3 rounded-full border-2 border-[#ccc] group-hover:border-[#888] transition-colors duration-300" />
          </div>
          <div>
            <h3 className="font-bold text-[#1a1a1a] text-[15px]">{block.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[11px] text-[#bbb] font-medium">{block.durationMinutes}m planned</span>
              {block.scheduledStart && (
                <>
                  <span className="text-[11px] text-[#ddd]">·</span>
                  <span className="text-[11px] text-[#bbb] font-medium">
                    {new Date(block.scheduledStart).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onSkip(block.id)}
            className="px-3 py-2 text-[#aaa] hover:text-[#666] hover:bg-[#f0f0f0] rounded-lg text-[12px] font-semibold transition-all cursor-pointer"
          >
            Skip
          </button>
          <button
            onClick={() => onDelete(block.id)}
            className="px-3 py-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg text-[12px] font-semibold transition-all cursor-pointer"
          >
            Delete
          </button>
          <button
            onClick={() => onStart(block.id)}
            className="px-5 py-2.5 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white rounded-xl text-[13px] font-bold transition-all duration-300 shadow-md active:scale-[0.97] cursor-pointer"
          >
            Start →
          </button>
        </div>
      </div>
    );
  };

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
          <span className="bg-[#f0f0f0] text-[#999] text-[11px] font-bold px-2.5 py-1 rounded-lg">
            {currentBlocks.length}
          </span>
        </div>

        <button
          onClick={onAddBlock}
          className="inline-flex items-center gap-1.5 px-3 py-2 text-[#666] hover:text-[#1a1a1a] hover:bg-[#f5f5f5] rounded-xl text-[13px] font-bold transition-all duration-200 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
          Add to {activeTab === 'today' ? 'Today' : 'Tomorrow'}
        </button>
      </div>

      <div className="relative">
        {/* Timeline connector */}
        {currentBlocks.length > 1 && (
          <div className="absolute left-[25px] top-[52px] bottom-[52px] w-[2px] bg-gradient-to-b from-[#1a1a1a] via-[#ddd] to-[#eee] rounded-full" />
        )}

        <div className="space-y-3 relative">
          {loading && currentBlocks.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-2 border-[#1a1a1a] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-[#bbb] text-[13px] font-medium">Loading blocks...</p>
            </div>
          ) : currentBlocks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#bbb] text-[13px] font-medium mb-3">
                No blocks planned for {activeTab === 'today' ? 'today' : 'tomorrow'}.
              </p>
              <button
                onClick={onAddBlock}
                className="px-5 py-2.5 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white rounded-xl text-[13px] font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.97] cursor-pointer"
              >
                + Add your first block
              </button>
            </div>
          ) : (
            currentBlocks.map(renderBlock)
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Mini timer that shows live elapsed time inside a running block row.
 */
const RunningTimer = ({ block }: { block: TimeBlock }) => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const elapsed = block.actualStart
    ? Math.floor((now - new Date(block.actualStart).getTime()) / 1000)
    : 0;
  const totalSec = block.durationMinutes * 60;
  const remaining = Math.max(0, totalSec - elapsed);
  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const progress = Math.min(1, elapsed / totalSec);

  return (
    <>
      <div className="w-16 bg-[#e0e0e0] rounded-full h-1.5 overflow-hidden">
        <div className="h-full rounded-full bg-[#1a1a1a] transition-all duration-1000" style={{ width: `${progress * 100}%` }} />
      </div>
      <span className="text-[18px] font-black text-[#1a1a1a] tabular-nums font-mono">
        {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
      </span>
    </>
  );
};

export default TimeBlockManager;
