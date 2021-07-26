import React, { useState } from "react";
import "./navbar.scss";
import { subMenu } from "../../data/subMenu";
import Submenu from "../Submenu/Submenu";

const Navbar = () => {
  return (
    <>
      <nav className="Navbar container">
        <div className="Navbar_menu">
          <div className="Navbar_left">
            <h1 className="Navbar_logo">Blogr</h1>
            <ul className="Navbar_links">
            {subMenu.map((item, index) => {
              return <Submenu key={index} item={item} />;
            })}
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
