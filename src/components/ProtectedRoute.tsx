import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useAuth } from "@clerk/clerk-react";
import { setAuthTokenProvider } from "../api/apiClient";
import api from "../api/apiClient";
 
interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isSynced, setIsSynced] = useState(false);
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useUser();
  const { getToken } = useAuth();

  // Wire the Clerk token into the axios client once on mount.
  // This is the single place that connects Clerk auth → API layer.
  useEffect(() => {
    setAuthTokenProvider(getToken);
    // 2. Sync the user, THEN allow children to render
  api.get("/user/me")
    .then(() => setIsSynced(true))
    .catch((err) => console.error("User sync failed:", err));
  }, [getToken]);

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
