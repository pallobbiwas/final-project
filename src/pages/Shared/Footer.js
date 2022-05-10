import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer>
      <div
        style={{ background: `url(${footer})`, backgroundPosition: "cover" }}
        className="footer p-10 text-black"
      >
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </div>
      <div className="text-center">
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
