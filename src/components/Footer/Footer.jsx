import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="logo" width={120} />
          <span className="secondaryText">
            Our Vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">14 Karve Nagar, Pune-411011</span>

          <div className="flexCenter f-menu">
            <sapn>Property</sapn>
            <sapn>Services</sapn>
            <sapn>Product</sapn>
            <sapn>About Us</sapn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
