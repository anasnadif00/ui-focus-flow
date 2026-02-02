import React from "react";
import { Link } from "react-router-dom";

const LandingHero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 tracking-tight mb-8">
          Master your focus, <br />
          <span className="text-gray-500">amplify your flow.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10 leading-relaxed">
          Focus Flow helps you organize your work, eliminate distractions, and
          achieve a state of deep focus with a simple, elegant interface.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/app"
            className="w-full sm:w-auto px-8 py-4 bg-black text-white text-lg font-medium rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            Start for free
          </Link>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 text-lg font-medium rounded-full border border-gray-200 hover:border-gray-400 transition-all"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;

