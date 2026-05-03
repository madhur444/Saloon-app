import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import BlueBox from "../../component/bluebox/BlueBox";
import "./login.css";
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login-box">
        <BlueBox
          type="Sign In"
          account="Don't Have acccount?"
          user="Email"
          pass="Enter your Password"
          logintype="Sign-Up"
        />
      </div>
      <Footer />
    </>
  );
};

export default Login;
