import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { subMenu } from "../../data/subMenu";
import Submenu from "../Submenu/Submenu";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  function closeMobile() {
    setClick(false);
  }
  function handleClick() {
    setClick(!click);
  }

  function showButton() {
    if (window.innerWidth <= 960) {
      setClick(true);
    } else {
      setClick(false);
    }
  }
  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className="Navbar container">
        <div className="Navbar_menu">
          <div className="Navbar_left">
            <h1 className="Navbar_logo">Blogr</h1>
            <div className="Navbar_mobileIcon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <div className="Navbar_mobileContainer">
              {click && <MobileNav menu={subMenu} />}
            </div>
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
