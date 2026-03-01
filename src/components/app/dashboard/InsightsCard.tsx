import { useMemo } from 'react';
import type { TimeBlock } from '../../../types/TimeBlock';

interface InsightsCardProps {
  blocks: TimeBlock[];
  completedToday: TimeBlock[];
}

const InsightsCard = ({ blocks, completedToday }: InsightsCardProps) => {
  const insights = useMemo(() => {
    const result: { emoji: string; title: string; desc: string }[] = [];
    const completed = blocks.filter((b) => b.status === 'COMPLETED');

    // 1. Most productive category
    if (completed.length > 0) {
      const categoryMinutes: Record<string, number> = {};
      completed.forEach((b) => {
        const cat = b.category || 'General';
        categoryMinutes[cat] = (categoryMinutes[cat] || 0) + b.durationMinutes;
      });
      const topCategory = Object.entries(categoryMinutes).sort((a, b) => b[1] - a[1])[0];
      if (topCategory) {
        result.push({
          emoji: '🎯',
          title: `Top category: ${topCategory[0]}`,
          desc: `${Math.floor(topCategory[1] / 60)}h ${topCategory[1] % 60}m of focus time in this category.`,
        });
      }
    }

    // 2. Today's progress
    if (completedToday.length > 0) {
      const todayMinutes = completedToday.reduce((s, b) => s + b.durationMinutes, 0);
      result.push({
        emoji: '📈',
        title: `${completedToday.length} block${completedToday.length !== 1 ? 's' : ''} completed today`,
        desc: `You've focused for ${Math.floor(todayMinutes / 60)}h ${todayMinutes % 60}m today. Keep going!`,
      });
    }

    // 3. Total stats
    if (completed.length > 0) {
      const totalMinutes = completed.reduce((s, b) => s + b.durationMinutes, 0);
      result.push({
        emoji: '⏱️',
        title: `${completed.length} total sessions`,
        desc: `${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m of deep work tracked overall.`,
      });
    }

    // Fallback if no data
    if (result.length === 0) {
      result.push({
        emoji: '💡',
        title: 'Get started!',
        desc: 'Complete your first block to see insights here.',
      });
    }

    return result.slice(0, 3);
  }, [blocks, completedToday]);

  return (
    <div className="bg-gradient-to-br from-white to-[#fafafa] rounded-2xl p-6 border border-[#eee]/80 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
      <h3 className="text-[15px] font-bold text-[#1a1a1a] mb-4">Insights</h3>
      <div className="space-y-2.5">
        {insights.map((insight) => (
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
  );
};

export default InsightsCard;
