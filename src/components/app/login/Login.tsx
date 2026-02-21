import React from "react";
import { SignIn } from "@clerk/clerk-react";
import AuthLayout from "./AuthLayout";
import { clerkAppearance } from "./clerkTheme";

const Login: React.FC = () => {
  return (
    <AuthLayout
      title="Welcome back"
      alternativeAction={{
        text: "Don't have an account?",
        linkText: "Create one",
        linkTo: "/app/register",
      }}
    >
      <div className="pl-5.5">
      <SignIn
        path="/app/login"
        routing="path"
        fallbackRedirectUrl="/app"
        appearance={clerkAppearance}
      />
      </div>
    </AuthLayout>
  );
};

export default Login;
