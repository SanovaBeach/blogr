import React from "react";
import "./navbar.scss";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="Navbar container">
        <div className="Navbar_menu">
          <div className="Navbar_left">
            <h1 className="Navbar_logo">Blogr</h1>
            <ul className="Navbar_links">
              <li className="Navbar_item">
                Product{" "}
                <span className="Navbar_arrow">
                  <FaAngleDown />
                </span>
              </li>
              <li className="Navbar_item">
                Category{" "}
                <span className="Navbar_arrow">
                  <FaAngleDown />
                </span>
              </li>
              <li className="Navbar_item">
                Connect{" "}
                <span className="Navbar_arrow">
                  <FaAngleDown />
                </span>
              </li>
            </ul>
          </div>
          <div className="Navbar_right">
            <button className="login">Login</button>
            <button className="primary-button">Sign Up</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
