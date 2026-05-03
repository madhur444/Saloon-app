import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../footer/Footer";
import BlueBox from "../../component/bluebox/BlueBox";
const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="login-box">
        <BlueBox
          type="Sign Up"
          account=" If You Have an acccount?"
          logintype="Sign-In"
          user="Create a UserName"
          pass="Create Your Password"
        />
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
