import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/app/login", { replace: true });
    }
  }, [isSignedIn, isLoaded, navigate]);

  // Show nothing while loading
  if (!isLoaded) return null;

  // If signed in, show the content
  if (isSignedIn) {
    return <>{children}</>;
  }

  // If not signed in (and loaded), the useEffect handles redirect
  return null;
};
