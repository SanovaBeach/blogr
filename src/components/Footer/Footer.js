import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer_container container">
        <h1 className="Footer_logo">Blogr</h1>
        <section className="Footer_card">
          <p className="Footer_title">Product</p>
          <ul className="Footer_list">
            <li className="Footer_item">Overview</li>
            <li className="Footer_item">Pricing</li>
            <li className="Footer_item">Marketplace</li>
            <li className="Footer_item">Features</li>
            <li className="Footer_item">Integrations</li>
          </ul>
        </section>
        <section className="Footer_card">
          <p className="Footer_title">Company</p>
          <ul className="Footer_list">
            <li className="Footer_item">About</li>
            <li className="Footer_item">Team</li>
            <li className="Footer_item">Blog</li>
            <li className="Footer_item">Careers</li>
          </ul>
        </section>
        <section className="Footer_card">
          <p className="Footer_title">Connect</p>
          <ul className="Footer_list">
            <li className="Footer_item">Contact</li>
            <li className="Footer_item">Newsletter</li>
            <li className="Footer_item">Linkedin</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
