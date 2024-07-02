import React from "react";
import SignUp from "./pages/SignUp";
import HeaderForRoute from "./components/shared/HeaderForRoute";

const AuthSignup = () => {
  return (
    <div>
      <HeaderForRoute></HeaderForRoute>
      <div className="bg-hero bg-cover bg-center bg-no-repeat min-h-screen ">
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="border border-gray-300 p-8">
            <div className="max-w-md w-full space-y-8">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSignup;
