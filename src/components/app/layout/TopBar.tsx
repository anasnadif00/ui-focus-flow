interface TopBarProps {
  title?: string;
  subtitle?: string;
  onAddBlock?: () => void;
}

const TopBar = ({ title = "Welcome back", subtitle = "Sunday, February 22", onAddBlock }: TopBarProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <p className="text-[13px] text-[#b5b5b5] font-medium mb-0.5">{subtitle}</p>
        <h1 className="text-[27px] font-extrabold text-[#1a1a1a] tracking-tight">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={onAddBlock}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white rounded-xl text-[13px] font-bold hover:from-[#222] hover:to-[#333] transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.12)] active:scale-[0.97] cursor-pointer"
        >
          <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          Add Block
        </button>
      </div>
    </div>
  );
};

export default TopBar;
