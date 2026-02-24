import React from 'react';

const MotivationStrip = () => {
  return (
    <div className="flex items-center gap-4 mb-8 px-1">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#e0e0e0] to-transparent" />
      <p className="text-[12px] text-[#bbb] font-medium italic whitespace-nowrap">
        "Deep work is the ability to focus without distraction on a cognitively demanding task."
      </p>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#e0e0e0] to-transparent" />
    </div>
  );
};

export default MotivationStrip;
