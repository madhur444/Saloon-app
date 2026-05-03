import React from "react";
import "./contact.css";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../footer/Footer";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="connect">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            This is contact page of our application <br />
            If you have any question feel free to reach out!
          </p>
        </div>
        <div className="pata">
          <h2>
            {" "}
            <button>📍Adress</button>
          </h2>
          <p>123 Main street,City,country</p>
        </div>
        <div className="call">
          <h2>
            <button>📞Phone</button>
          </h2>
          <p>+9102020202020</p>
        </div>
        <div className="Email">
          <h2>
            <button>💌E-Mail</button>
          </h2>
          <p>fuckyouemail.com</p>
        </div>
        <div className="enquires">
          <p>Send us details InQuries</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
