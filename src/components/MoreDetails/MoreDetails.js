import React from "react";
import "./moreDetails.scss";
import phone from "../../images/illustration-phones.svg";

const MoreDetails = () => {
  return (
    <section className="More">
      <div className="More_container container">
        <div className="More_row">
          <div className="More_left">
            <img src={phone} alt="" className="More_image" />
          </div>
          <div className="More_right">
            <h3 className="More_heading">State of the Art Infrastructure</h3>
            <p className="More_desc">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreDetails;
