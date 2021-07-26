import React from "react";
import "./mobileNav.scss";
import "../Navbar/navbar.scss";
import MobileMenu from "./MobileMenu";

const MobileNav = ({ menu }) => {
  return (
    <div className="Mobile">
      <ul className="Mobile_links">
        {menu.map((item, index) => {
          return <MobileMenu key={index} item={item} />;
        })}
        <div className="Mobile_btnContainer">
          <button className="login">Login</button>
          <button className="primary-button">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default MobileNav;
