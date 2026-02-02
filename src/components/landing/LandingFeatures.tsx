
import React from "react";

export const LandingFeatures: React.FC = () => {
  const features = [
    {
      title: 'Dashboard "Day at a Glance"',
      description: "Your productivity command center. Visualize your day with active time blocks, upcoming schedules, and real-time progress tracking.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 6h12a2.25 2.25 0 012.25 2.25v12a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 20.25V8.25A2.25 2.25 0 016 6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.25l-3-3m0 0l3-3m-3 3h12m0 0l-3-3m0 0l3 3m-3-3v12" opacity={0.5}/>
        </svg>
      ),
      items: ["Active time block with countdown", "Start / Skip / Complete controls", "Real-time WebSocket updates"]
    },
    {
      title: "Smart Schedule Planner",
      description: "Organize your day with intention. A drag-and-drop timeline that lets you structure deep work sessions like a pro.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
      items: ["Drag-and-drop timeline", "Custom duration selectors", "Pomodoro integration"]
    },
    {
      title: "History & Analytics",
      description: "Understand your cognitive patterns. Visualize your focus streaks and productivity trends to optimize your workflow.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      ),
      items: ["Focus streak visualization", "Category breakdown charts", "Detailed session logs"]
    },
    {
      title: "Seamless Management",
      description: "Create, edit, and refine your schedule with an intuitive modal interface designed for speed and clarity.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      ),
      items: ["Quick-add block modal", "Custom objectives & notes", "Flexible scheduling"]
    },
    {
      title: "Secure & Cloud Synced",
      description: "Your data is yours, securely stored and accessible from anywhere.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      items: ["JWT Authentication", "Spring Security Backend", "Cross-device sync"]
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for <span className="text-black decoration-4 decoration-sky-400 underline-offset-4">Deep Work</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A comprehensive suite of tools designed to help you enter the flow state and stay there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all group"
            >
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
