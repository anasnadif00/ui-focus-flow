import React from "react";
import { SignUp } from "@clerk/clerk-react";
import AuthLayout from "./AuthLayout";
import { clerkAppearance } from "./clerkTheme";

const Registration: React.FC = () => {
  return (
    <AuthLayout
      title="Create your account"
      alternativeAction={{
        text: "Already have an account?",
        linkText: "Sign in",
        linkTo: "/app/login",
      }}
    >
      <div className="pl-4">
      <SignUp
        path="/app/register"
        routing="path"
        fallbackRedirectUrl="/app"
        appearance={clerkAppearance}
      />  
      </div>
    </AuthLayout>
  );
};

export default Registration;
