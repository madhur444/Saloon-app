import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="containerr">
      <div className="navbar">
        <div className="left-side">
          <div className="pogo"></div>
          <h2 className="head">Salon Edge</h2>
        </div>

        <div className="left">
          <Link to="/">
            <button className="home">Home</button>
          </Link>
          <Link to="/about">
            <button className="about">About</button>
          </Link>
          <Link to="/services">
            <button className="service">Service</button>
          </Link>
          <Link to="/contact">
            <button className="contact">Contact</button>
          </Link>
        </div>
        <div className="right">
          {" "}
          <Link to="/login">
            <button className="login">Log-In</button>
          </Link>
          <Link to="/SignUp">
            <button className="sign-up">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
