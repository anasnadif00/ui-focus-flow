import { useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const navItemClass = (path: string) =>
    isActive(path)
      ? 'flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white font-semibold text-[13px] shadow-[0_4px_14px_rgba(0,0,0,0.15),0_1px_3px_rgba(0,0,0,0.08)] cursor-pointer'
      : 'flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#aaa] hover:text-[#444] hover:bg-[#f5f5f5] font-medium text-[13px] cursor-pointer transition-all duration-300';

  return (
    <aside className="w-[250px] bg-gradient-to-b from-white via-white to-[#fafafa] border-r border-gray-200/50 flex flex-col sticky top-0 h-screen">
      {/* Logo */}
      <div className="px-6 pt-8 pb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#1a1a1a] to-[#333] rounded-[14px] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.1)]">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <span className="text-[16px] font-extrabold text-[#1a1a1a] tracking-tight block leading-none">Focus Flow</span>
            <span className="text-[10px] font-bold text-[#bbb] uppercase tracking-[0.2em] mt-0.5 block">Productivity</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 overflow-y-auto">
        <p className="text-[10px] font-bold text-[#d0d0d0] uppercase tracking-[0.18em] px-3 mb-2">Menu</p>
        <nav className="space-y-0.5 mb-8">
          <Link to="/app" className={navItemClass('/app')}>
            <svg className={`w-[18px] h-[18px] ${isActive('/app') ? 'opacity-80' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            Dashboard
          </Link>
          <Link to="/app/history" className={navItemClass('/app/history')}>
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            History
          </Link>
          <Link to="/app/analytics" className={navItemClass('/app/analytics')}>
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            Analytics
          </Link>
        </nav>
      </div>

      {/* User */}
      <div className="p-4 border-t border-[#eee]">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-[#f7f7f7] to-[#f0f0f0] hover:from-[#f0f0f0] hover:to-[#eaeaea] cursor-pointer transition-all duration-300">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2a2a2a] to-[#444] flex items-center justify-center text-white text-sm font-bold shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
            {user?.username?.[0]?.toUpperCase() || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-bold text-[#1a1a1a] truncate">{user?.username || 'User'}</p>
            <p className="text-[11px] text-[#bbb] font-medium">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
