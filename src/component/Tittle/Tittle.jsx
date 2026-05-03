import React from "react";
import "./tittle.css";
import { Link } from "react-router-dom";
const Tittle = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="heading-one">
          <h1>EXPERIENCE PRECISION</h1>
        </div>
        <div className="heading2">
          <h1 className="wow">ELEVATE </h1>
          <h1 className="wow2">YOUR STYLE</h1>{" "}
        </div>

        <div className="text-one">
          Cutting-edge salon styling tailored to highlight your natural
        </div>
        <div className="text-two">beauty and confidence</div>

        <div className="buttons">
          <Link to="/login">
            <button className="obtn">Book Your Appointment</button>
          </Link>
          <Link to="/services">
            <button className="tbtn">View Our Services</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tittle;
