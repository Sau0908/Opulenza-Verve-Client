import React from "react";
import Header from "../components/Auth/Header";
import SignupComp from "../components/Auth/SignUpComp";
const SignUp = () => {
  return (
    <div>
      <Header
        heading="Signup To Create An Account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
      <SignupComp />
    </div>
  );
};

export default SignUp;
