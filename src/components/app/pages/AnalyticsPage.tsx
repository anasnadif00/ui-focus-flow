import { useMemo } from 'react';
import AppLayout from '../layout/AppLayout';
import { useTimeBlocks } from '../../../hooks/useTimeBlocks';

const AnalyticsPage = () => {
  const { blocks, loading, authLoading } = useTimeBlocks();

  const completed = useMemo(() => blocks.filter((b) => b.status === 'COMPLETED'), [blocks]);

  // Category breakdown
  const categoryStats = useMemo(() => {
    const map: Record<string, { minutes: number; count: number }> = {};
    completed.forEach((b) => {
      const cat = b.category || 'General';
      if (!map[cat]) map[cat] = { minutes: 0, count: 0 };
      map[cat].minutes += b.durationMinutes;
      map[cat].count += 1;
    });
    return Object.entries(map)
      .map(([category, data]) => ({ category, ...data }))
      .sort((a, b) => b.minutes - a.minutes);
  }, [completed]);

  // Weekly data (last 7 days)
  const weeklyData = useMemo(() => {
    const days: { label: string; date: string; minutes: number; count: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const dayEnd = new Date(dayStart.getTime() + 86400000);

      const dayBlocks = completed.filter((b) => {
        if (!b.actualEnd) return false;
        const t = new Date(b.actualEnd).getTime();
        return t >= dayStart.getTime() && t < dayEnd.getTime();
      });

      days.push({
        label: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        minutes: dayBlocks.reduce((s, b) => s + b.durationMinutes, 0),
        count: dayBlocks.length,
      });
    }
    return days;
  }, [completed]);

  const totalMinutes = completed.reduce((s, b) => s + b.durationMinutes, 0);
  const avgPerDay = completed.length > 0 ? Math.round(totalMinutes / 7) : 0;
  const maxBarMinutes = Math.max(...weeklyData.map((d) => d.minutes), 1);

  if (authLoading) {
    return (
      <AppLayout title="Analytics" subtitle="">
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-[#1a1a1a] border-t-transparent rounded-full animate-spin" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout title="Analytics" subtitle="Your focus patterns and productivity insights">

      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Sessions', value: completed.length.toString(), icon: '🎯' },
          { label: 'Total Focus Time', value: `${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m`, icon: '⏱️' },
          { label: 'Avg per Day', value: `${Math.floor(avgPerDay / 60)}h ${avgPerDay % 60}m`, icon: '📊' },
          { label: 'Categories', value: categoryStats.length.toString(), icon: '📂' },
        ].map((stat) => (
          <div key={stat.label} className="bg-gradient-to-br from-white to-[#fafafa] rounded-2xl p-5 border border-[#eee]/80 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5f5f5] to-[#eee] flex items-center justify-center mb-3 text-lg">
              {stat.icon}
            </div>
            <p className="text-[22px] font-extrabold text-[#1a1a1a] leading-tight">{stat.value}</p>
            <p className="text-[12px] text-[#999] font-medium mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5 mb-8">
        {/* Weekly Chart */}
        <div className="col-span-2 bg-gradient-to-br from-white to-[#fbfbfb] rounded-2xl p-6 border border-[#eee]/80 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
          <h3 className="text-[15px] font-bold text-[#1a1a1a] mb-5">Last 7 Days</h3>

          <div className="flex items-end gap-3 h-40 mb-4">
            {weeklyData.map((day, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                {day.minutes > 0 && (
                  <span className="text-[10px] font-bold text-[#999] tabular-nums">{day.minutes}m</span>
                )}
                <div
                  className={`w-full rounded-lg transition-all duration-500 ${
                    i === weeklyData.length - 1
                      ? 'bg-gradient-to-t from-[#1a1a1a] to-[#444] shadow-[0_2px_8px_rgba(0,0,0,0.12)]'
                      : 'bg-gradient-to-t from-[#eee] to-[#e4e4e4]'
                  }`}
                  style={{ height: `${Math.max((day.minutes / maxBarMinutes) * 100, 4)}%` }}
                />
                <span className={`text-[10px] font-bold ${i === weeklyData.length - 1 ? 'text-[#1a1a1a]' : 'text-[#ccc]'}`}>
                  {day.label}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#f0f0f0] flex items-center justify-between">
            <div>
              <p className="text-[20px] font-extrabold text-[#1a1a1a]">
                {Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m
              </p>
              <p className="text-[11px] text-[#bbb] font-medium">Total this week</p>
            </div>
            <div className="text-right">
              <p className="text-[16px] font-bold text-[#1a1a1a]">{completed.length}</p>
              <p className="text-[11px] text-[#bbb] font-medium">Sessions</p>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-gradient-to-br from-white to-[#fbfbfb] rounded-2xl p-6 border border-[#eee]/80 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
          <h3 className="text-[15px] font-bold text-[#1a1a1a] mb-5">By Category</h3>

          {categoryStats.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-[#bbb] text-[13px]">No data yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {categoryStats.map((cat) => {
                const pct = totalMinutes > 0 ? Math.round((cat.minutes / totalMinutes) * 100) : 0;
                return (
                  <div key={cat.category}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[13px] font-semibold text-[#1a1a1a]">{cat.category}</span>
                      <span className="text-[12px] font-bold text-[#888] tabular-nums">{pct}%</span>
                    </div>
                    <div className="w-full bg-[#f0f0f0] rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#1a1a1a] to-[#444] transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-[#bbb] font-medium mt-1">
                      {Math.floor(cat.minutes / 60)}h {cat.minutes % 60}m · {cat.count} session{cat.count !== 1 ? 's' : ''}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default AnalyticsPage;
