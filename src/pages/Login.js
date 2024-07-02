import React from "react";
import Header from "../components/Auth/Header";
import LoginComp from "../components/Auth/LoginComp";
const Login = () => {
  return (
    <div>
      <Header
        heading="Login To Your Account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <LoginComp />
    </div>
  );
};

export default Login;
