import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface AppLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  onAddBlock?: () => void;
}

const AppLayout = ({ children, title, subtitle, onAddBlock }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f8f8] via-[#f3f3f4] to-[#eeeef0] flex font-sans antialiased">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-[1080px] mx-auto px-8 py-4">
          <TopBar title={title} subtitle={subtitle} onAddBlock={onAddBlock} />
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
