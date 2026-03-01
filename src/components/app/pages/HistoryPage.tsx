import { useState } from 'react';
import AppLayout from '../layout/AppLayout';
import { useTimeBlocks } from '../../../hooks/useTimeBlocks';
import type { TimeBlock } from '../../../types/TimeBlock';

const categoryEmojis: Record<string, string> = {
  Study: '📚', Work: '💼', Reading: '📖', Coding: '💻', Writing: '✍️', Other: '📌',
};

const HistoryPage = () => {
  const { blocks, loading, authLoading } = useTimeBlocks();
  const [filter, setFilter] = useState<'all' | 'COMPLETED' | 'SKIPPED'>('all');

  const completedBlocks = blocks
    .filter((b) => b.status === 'COMPLETED' || b.status === 'SKIPPED')
    .filter((b) => filter === 'all' || b.status === filter)
    .sort((a, b) => {
      const aTime = a.actualEnd ? new Date(a.actualEnd).getTime() : 0;
      const bTime = b.actualEnd ? new Date(b.actualEnd).getTime() : 0;
      return bTime - aTime;
    });

  const formatDuration = (mins: number) => {
    if (mins >= 60) {
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      return m > 0 ? `${h}h ${m}m` : `${h}h`;
    }
    return `${mins}m`;
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today.getTime() - 86400000);
    const blockDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());

    if (blockDay.getTime() === today.getTime()) return `Today at ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    if (blockDay.getTime() === yesterday.getTime()) return `Yesterday at ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ` at ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  if (authLoading) {
    return (
      <AppLayout title="History" subtitle="">
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-[#1a1a1a] border-t-transparent rounded-full animate-spin" />
        </div>
      </AppLayout>
    );
  }

  const totalMinutes = completedBlocks.filter(b => b.status === 'COMPLETED').reduce((s, b) => s + b.durationMinutes, 0);

  return (
    <AppLayout title="Session History" subtitle={`${completedBlocks.length} sessions · ${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m total focus`}>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-[#eef0f2] p-1 rounded-xl flex items-center shadow-inner">
          {(['all', 'COMPLETED', 'SKIPPED'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-1.5 rounded-lg text-[13px] font-bold transition-all duration-300 cursor-pointer ${
                filter === f
                  ? 'bg-white text-[#1a1a1a] shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
                  : 'text-[#888] hover:text-[#555]'
              }`}
            >
              {f === 'all' ? 'All' : f === 'COMPLETED' ? 'Completed' : 'Skipped'}
            </button>
          ))}
        </div>
      </div>

      {/* Session List */}
      <div className="space-y-2">
        {loading && completedBlocks.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-8 h-8 border-2 border-[#1a1a1a] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-[#bbb] text-[13px] font-medium">Loading sessions...</p>
          </div>
        ) : completedBlocks.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[48px] mb-3">📭</p>
            <p className="text-[#999] text-[15px] font-semibold mb-1">No sessions yet</p>
            <p className="text-[#ccc] text-[13px]">Complete your first focus block to see it here.</p>
          </div>
        ) : (
          completedBlocks.map((block) => (
            <SessionRow key={block.id} block={block} formatDuration={formatDuration} formatDate={formatDate} />
          ))
        )}
      </div>
    </AppLayout>
  );
};

const SessionRow = ({
  block,
  formatDuration,
  formatDate,
}: {
  block: TimeBlock;
  formatDuration: (m: number) => string;
  formatDate: (d?: string) => string;
}) => {
  const emoji = categoryEmojis[block.category || 'Other'] || '📌';

  return (
    <div className="bg-gradient-to-br from-white to-[#fcfcfc] border border-[#eee] rounded-2xl p-5 flex justify-between items-center hover:border-[#ddd] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f5f5f5] to-[#eee] border border-[#e0e0e0] flex items-center justify-center text-lg">
          {emoji}
        </div>
        <div>
          <h3 className={`font-bold text-[15px] ${block.status === 'SKIPPED' ? 'text-[#bbb] line-through' : 'text-[#1a1a1a]'}`}>
            {block.title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
              block.status === 'COMPLETED'
                ? 'text-emerald-700 bg-emerald-50'
                : 'text-[#aaa] bg-[#f0f0f0]'
            }`}>
              {block.status === 'COMPLETED' ? 'Completed' : 'Skipped'}
            </span>
            {block.category && (
              <>
                <span className="text-[11px] text-[#ddd]">·</span>
                <span className="text-[11px] text-[#bbb] font-medium">{block.category}</span>
              </>
            )}
            <span className="text-[11px] text-[#ddd]">·</span>
            <span className="text-[11px] text-[#bbb] font-medium">{formatDate(block.actualEnd)}</span>
          </div>
        </div>
      </div>
      <span className="text-[16px] font-black text-[#1a1a1a] tabular-nums font-mono">
        {formatDuration(block.durationMinutes)}
      </span>
    </div>
  );
};

export default HistoryPage;
