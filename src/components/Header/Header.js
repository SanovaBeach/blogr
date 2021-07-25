import React from "react";
import Navbar from "../Navbar/Navbar";
import Showcase from "../Showcase/Showcase";
import "./header.scss";

const Header = () => {
  return (
    <>
      <header className="Header">
        <Navbar />
        <div className="Header_showcase">
          <Showcase />
        </div>
      </header>
    </>
  );
};

export default Header;
