import React from "react";
import "./blue.css";
import { Link } from "react-router-dom";

const BlueBox = (props) => {
  return (
    <>
      <div className="Blue-Box">
        <div className="blueHead">
          <h2>{props.type}</h2>
        </div>
        <input type="text" placeholder={props.user} />

        <input type="text" placeholder={props.pass} />
        <p>
          {props.account}{" "}
          <Link to={props.logintype === "Sign-In" ? "/login" : "/signup"}>
            {props.logintype}
          </Link>
        </p>
        <div className="end">
          <button>{props.type}</button>
        </div>
      </div>
    </>
  );
};

export default BlueBox;
