import React from "react";

export const LandingPreview: React.FC = () => {
  return (
    <section className="pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-2xl bg-gray-900/5 p-4 sm:p-6 lg:p-8">
          <div className="absolute inset-0 bg-linear-to-tr from-gray-100 to-white rounded-2xl transform -rotate-1 scale-[1.02] -z-10 shadow-2xl"></div>
          <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 aspect-video sm:aspect-16/10 md:aspect-video">
            {/* Mockup Top Bar */}
            <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            
            {/* Mockup Body */}
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="w-16 sm:w-64 bg-gray-50 border-r border-gray-100 shrink-0 flex flex-col p-4 gap-4 sm:flex">
                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="space-y-2 mt-4">
                  <div className="w-full h-8 bg-gray-200/50 rounded animate-pulse delay-75"></div>
                  <div className="w-full h-8 bg-gray-200/50 rounded animate-pulse delay-100"></div>
                  <div className="w-full h-8 bg-gray-200/50 rounded animate-pulse delay-150"></div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-6 sm:p-8 bg-white">
                <div className="max-w-3xl mx-auto space-y-6">
                  <div className="w-1/3 h-8 bg-gray-100 rounded mb-8 animate-pulse"></div>
                  
                  {/* Notes List */}
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-4 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors shadow-sm">
                        <div className="w-1/2 h-5 bg-gray-100 rounded mb-2 animate-pulse"></div>
                        <div className="w-3/4 h-4 bg-gray-50 rounded animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPreview;
