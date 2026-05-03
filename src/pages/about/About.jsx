import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <div className="box">
        <div className="mini-box">
          <div className="hd">
            <h1>About Saloon Edge</h1>
          </div>

          <div className="cutt">
            <div className="lft">
              <p>
                Salon Edge is a premier salon located in the heart of the city.
                We offer a wide range of services including haircuts, coloring,
                and styling. <br />
                Our team of experienced professionals is dedicated to providing
                you with the highest level of service and care. For over 15
                years, Bella Salon has been the premier destination for beauty
                and style in our community. <br />
                Our passion lies in helping each client discover their unique
                beauty through personalized service and craftsmanship. Our team
                of skilled professionals stays current with the latest trends
                and techniques, ensuring you receive the highest quality service
                in a , welcoming environment. We believe that beauty is
                personal, and every visit should transformative experience that
                leaves you feeling confident, refreshed, and absolutely radiant.
              </p>
            </div>
            <div className="ryt">
              <img
                src="tities\brothers.jpg"
                alt=""
                height={"350px"}
                width={"250px"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
