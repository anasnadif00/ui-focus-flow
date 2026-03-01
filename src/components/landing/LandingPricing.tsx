import { Link } from "react-router-dom";

const LandingPricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Completely free. No strings attached.
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Focus Flow is free to use for everyone. No hidden fees, no premium tiers,
          no credit card required. Just pure productivity.
        </p>

        <div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-xl max-w-md mx-auto">
          <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <div className="flex items-baseline justify-center mb-2">
            <span className="text-5xl font-bold text-gray-900">$0</span>
            <span className="text-gray-500 ml-1 text-lg">/forever</span>
          </div>
          <p className="text-gray-500 mb-8">Everything included, always.</p>

          <ul className="space-y-3 mb-8 text-left">
            {[
              "Unlimited time blocks",
              "Full analytics dashboard",
              "Complete session history",
              "All categories & customization",
              "Cloud sync across devices",
              "Secure authentication",
            ].map((feature) => (
              <li key={feature} className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 text-[15px]">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/app"
            className="block w-full py-3.5 px-4 rounded-xl text-center font-semibold bg-black text-white hover:bg-gray-800 transition-colors text-lg shadow-lg"
          >
            Get started — it's free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPricing;
