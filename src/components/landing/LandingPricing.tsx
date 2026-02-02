import React from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "$0",
    description: "Essential tools for personal focus.",
    features: ["3 Projects", "Basic Analytics", "7-day History", "Email Support"],
    cta: "Start for free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "Advanced features for power users.",
    features: [
      "Unlimited Projects",
      "Advanced Analytics",
      "Unlimited History",
      "Priority Support",
      "Custom Themes",
      "Integrations",
    ],
    cta: "Go Pro",
    highlight: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "/user/mo",
    description: "Collaboration tools for high-performing teams.",
    features: [
      "Everything in Pro",
      "Team Dashboard",
      "Admin Controls",
      "Shared Projects",
      "SSO & Security",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const LandingPricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Choose the plan that fits your workflow. 14-day free trial on all paid plans.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border ${
                plan.highlight
                  ? "bg-white border-black shadow-xl scale-105 z-10"
                  : "bg-white border-gray-200 shadow-sm"
              } flex flex-col`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                )}
              </div>
              <p className="text-gray-500 mb-6">{plan.description}</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/app"
                className={`w-full py-3 px-4 rounded-lg text-center font-medium transition-colors ${
                  plan.highlight
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-gray-900 border border-gray-200 hover:border-black"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPricing;
