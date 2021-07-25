import React from "react";
import "./showcase.scss";

const Showcase = () => {
  return (
    <>
      <div className="Showcase container">
        <h1 className="Showcase_title">A modern publishing platform</h1>
        <p className="Showcase_subtitle">
          Grow your audience and build your online brand
        </p>
        <div className="Showcase_buttonContainer">
          <button className="primary-button">Start For Free</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </>
  );
};

export default Showcase;
