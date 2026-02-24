import React from 'react';

const InsightsCard = () => {
  return (
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
  );
};

export default InsightsCard;
