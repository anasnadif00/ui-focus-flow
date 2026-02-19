import React from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  alternativeAction?: {
    text: string;
    linkText: string;
    linkTo: string;
  };
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  alternativeAction,
}) => {
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <Link to="/" className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
            <div className="relative w-12 h-12 bg-black rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-xl ring-1 ring-gray-900/5">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </Link>
        </div>
        
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        
        {subtitle && (
          <p className="mt-2 text-center text-sm text-gray-600">
            {subtitle}
          </p>
        )}

        {alternativeAction && (
          <p className="mt-2 text-center text-sm text-gray-600">
            {alternativeAction.text}{" "}
            <Link
              to={alternativeAction.linkTo}
              className="font-medium text-black hover:text-gray-700 underline underline-offset-4 decoration-black/30 hover:decoration-black transition-all"
            >
              {alternativeAction.linkText}
            </Link>
          </p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[440px] px-4 sm:px-0">
          {children}
        
        <p className="mt-6 text-center text-xs text-gray-400">
          By configuring this account, you agree to our{" "}
          <a href="#" className="underline hover:text-gray-500">Terms</a> and{" "}
          <a href="#" className="underline hover:text-gray-500">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
