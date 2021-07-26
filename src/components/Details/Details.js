import React from "react";
import "./details.scss";

const Details = ({
  title,
  subheading1,
  desc1,
  subheading2,
  desc2,
  image,
  start,
  imgStart,
}) => {
  return (
    <div className="Details">
      <div className="Details_container container">
        <h1 className="Details_title">{title}</h1>
        <div className={`Details_row  ${start ? "start" : "end"} `}>
          <section className="Details_rowLeft">
            <div className="Details_content">
              <h3 className="Details_subtitle">{subheading1}</h3>
              <p className="Details_desc">{desc1}</p>
            </div>
            <div className="Details_content">
              <h3 className="Details_subtitle">{subheading2}</h3>
              <p className="Detail_desc">{desc2}</p>
            </div>
          </section>
          <section className="Details_rowRight">
            <img
              src={image}
              alt=""
              className={`Details_image ${imgStart ? "imgStart" : "imgEnd"} `}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Details;
