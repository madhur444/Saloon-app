import React from "react";
import "./services.css";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../footer/Footer";
import ServiceBox from "../../component/servic/ServiceBox";
const Services = () => {
  return (
    <>
      <Navbar />
      <div className="back-bucket">
        <div className="bucket">
          <div className="os">
            <h1 className="hh">Our Services</h1>
            <h4 className="h4">These are the services offered by Salon Edge</h4>
          </div>
          <div className="beat">
            <ServiceBox
              hud="Facial"
              makeUp="Deep Cleansing Facial"
              price="$49"
              duration="45 minutes"
            />
            <ServiceBox
              hud="Eyelash Extension"
              makeUp="Natural Look"
              price=" $70"
              duration="60 minutes"
            />
            <ServiceBox
              hud="Eyelash Tint"
              makeUp="Enhance your Lashes"
              price="$15"
              duration="20 minutes"
            />
            <ServiceBox
              hud="Hair Colour"
              makeUp="full color Services"
              price="$60"
              duration="60 minutes"
            />
            <ServiceBox
              hud="Pedicure"
              makeUp="Spa Pedicure Treatment"
              price="$28"
              duration="40 minutes"
            />
            <ServiceBox
              hud="Hair-Spa"
              makeUp="Nourishing Massage"
              price="$50"
              duration="50 minutes"
            />
            <ServiceBox
              hud="Eyebro Wax"
              makeUp="Precision Shaping"
              price="$13"
              duration="15 minutes"
            />
            <ServiceBox
              hud="Eyebrow Tint"
              makeUp="Enhance your Brows"
              price="$15"
              duration="20 minutesr"
            />
            <ServiceBox
              hud="Nail Art"
              makeUp="Creative Nail Desing"
              price="340"
              duration="45 minutesr"
            />
            <ServiceBox
              hud="Beard Trim"
              makeUp="Shape & Line Up"
              price="$25"
              duration="20 minutesr"
            />
            <ServiceBox
              hud="Blow Dry"
              makeUp="Quick Styling Session"
              price="$18"
              duration="20 minutesr"
            />
            <ServiceBox
              hud="Manicure"
              makeUp="Clean & Polish Nails"
              price="$22"
              duration="20 minutesr"
            />
            <ServiceBox
              hud="Pedicure"
              makeUp="Clean"
              price="$12"
              duration="10 minutesr"
            />
            <ServiceBox
              hud="Haircut"
              makeUp="Classic cut & Style"
              price="$23"
              duration="20 minutesr"
            />
            <ServiceBox
              hud="Checking Data"
              makeUp="Hojega Update"
              price="150 Rupeya dega"
              duration="1 minutesr"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
