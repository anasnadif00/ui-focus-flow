import { useMemo } from 'react';
import type { TimeBlock } from '../../../types/TimeBlock';

interface WeeklyChartProps {
  blocks: TimeBlock[];
}

const WeeklyChart = ({ blocks }: WeeklyChartProps) => {
  const dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  const { bars, totalMinutes, weekLabel } = useMemo(() => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0=Sun, 1=Mon, ...
    // Calculate Monday of this week
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(now);
    monday.setHours(0, 0, 0, 0);
    monday.setDate(monday.getDate() + mondayOffset);

    const dailyMinutes = [0, 0, 0, 0, 0, 0, 0]; // Mon–Sun

    const completedBlocks = blocks.filter((b) => b.status === 'COMPLETED' && b.actualEnd);
    completedBlocks.forEach((b) => {
      const end = new Date(b.actualEnd!);
      const diff = Math.floor((end.getTime() - monday.getTime()) / 86400000);
      if (diff >= 0 && diff < 7) {
        dailyMinutes[diff] += b.durationMinutes;
      }
    });

    const maxMinutes = Math.max(...dailyMinutes, 1);
    const todayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

    const bars = dailyMinutes.map((mins, i) => ({
      day: dayLabels[i],
      h: (mins / maxMinutes) * 100,
      active: i === todayIndex,
      minutes: mins,
    }));

    const totalMinutes = dailyMinutes.reduce((a, b) => a + b, 0);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    const weekLabel = `${monday.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}–${sunday.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;

    return { bars, totalMinutes, weekLabel };
  }, [blocks]);

  const totalHours = Math.floor(totalMinutes / 60);
  const totalMins = totalMinutes % 60;

  return (
    <div className="col-span-1 bg-gradient-to-br from-white to-[#fbfbfb] rounded-2xl p-6 border border-[#eee]/80 shadow-[0_1px_4px_rgba(0,0,0,0.03)] h-fit">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[15px] font-bold text-[#1a1a1a]">This Week</h3>
        <span className="text-[11px] text-[#ccc] font-medium">{weekLabel}</span>
      </div>

      <div className="flex items-end gap-2 h-28 mb-4">
        {bars.map((bar, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
            <div
              className={`w-full rounded-lg transition-all duration-500 ${
                bar.active
                  ? 'bg-gradient-to-t from-[#1a1a1a] to-[#444] shadow-[0_2px_8px_rgba(0,0,0,0.12)]'
                  : 'bg-gradient-to-t from-[#eee] to-[#e4e4e4] hover:from-[#ddd] hover:to-[#d4d4d4]'
              }`}
              style={{ height: `${Math.max(bar.h, 4)}%` }}
            />
            <span className={`text-[10px] font-bold ${bar.active ? 'text-[#1a1a1a]' : 'text-[#ccc]'}`}>
              {bar.day}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-[#f0f0f0]">
        <p className="text-[20px] font-extrabold text-[#1a1a1a]">
          {totalHours > 0 ? `${totalHours}h ${totalMins}m` : `${totalMins}m`}
        </p>
        <p className="text-[11px] text-[#bbb] font-medium">Total focus time</p>
      </div>
    </div>
  );
};

export default WeeklyChart;
