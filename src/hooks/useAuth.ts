import { useUser, useAuth as useClerkAuth } from "@clerk/clerk-react";

export const useAuth = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut, getToken } = useClerkAuth();

  return {
    user: isSignedIn
      ? {
          id: user?.id || "",
          username: user?.emailAddresses[0]?.emailAddress || "",
        }
      : null,
    isLoading: !isLoaded,
    isSignedIn,
    logout: signOut,
    getToken,
  };
};
