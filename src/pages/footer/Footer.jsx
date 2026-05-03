import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="boss">
        <div className="ooo">
          <h3>Salon Edge</h3>
          <p>
            Transform your look with our professional <br />
            beauty services. Experience luxury styling in a <br />
            modern, comfortable environment. Cutting- <br />
            edge salon styling tailored to highlight your <br />
            natural beauty and confidence.
          </p>
        </div>
        <div className="tww">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="ttt">
          <h3>Contact Us</h3>
          <p>
            123 Beauty St, Glamour City, CA 90210 <br />
            Phone: (123) 456-7890 <br />
            Email: info@salonedge.com
          </p>
        </div>
      </div>
      <div className="copy">
        {" "}
        <p>© 2023 Salon Edge. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
