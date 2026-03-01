
import type { TimeBlock } from '../../../types/TimeBlock';

interface RecentSessionsCardProps {
  recentBlocks: TimeBlock[];
}

const categoryEmojis: Record<string, string> = {
  Study: '📚',
  Work: '💼',
  Reading: '📖',
  Coding: '💻',
  Writing: '✍️',
  Other: '📌',
};

const RecentSessionsCard = ({ recentBlocks }: RecentSessionsCardProps) => {
  const formatDuration = (mins: number) => {
    if (mins >= 60) {
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      return m > 0 ? `${h}h ${m}m` : `${h}h`;
    }
    return `${mins}m`;
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today.getTime() - 86400000);
    const blockDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (blockDay.getTime() === today.getTime()) return 'Today';
    if (blockDay.getTime() === yesterday.getTime()) return 'Yesterday';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-gradient-to-br from-white to-[#fafafa] rounded-2xl p-6 border border-[#eee]/80 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[15px] font-bold text-[#1a1a1a]">Recent Sessions</h3>
      </div>
      <div className="space-y-0.5">
        {recentBlocks.length === 0 ? (
          <p className="text-[13px] text-[#bbb] py-4 text-center">No completed sessions yet.</p>
        ) : (
          recentBlocks.map((s) => (
            <div key={s.id} className="flex items-center justify-between py-3 px-3 -mx-1 rounded-xl hover:bg-gradient-to-r hover:from-[#fafafa] hover:to-[#f5f5f5] transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-base w-6 text-center">{categoryEmojis[s.category || 'Other'] || '📌'}</span>
                <div>
                  <p className="text-[13px] font-semibold text-[#1a1a1a]">{s.title}</p>
                  <p className="text-[11px] text-[#ccc] font-medium">{formatDate(s.actualEnd)}</p>
                </div>
              </div>
              <span className="text-[13px] font-bold text-[#888] tabular-nums font-mono">{formatDuration(s.durationMinutes)}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentSessionsCard;
