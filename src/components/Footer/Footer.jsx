import React from "react";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import "./Footer.css";
import SocialAndDownload from "./SocialAndDownload";

const Footer = ({ screenWidth }) => {
  return (
    <div
      style={{ padding: screenWidth >= 1440 ? "2rem 8rem" : "2rem" }}
      className="footer"
    >
      <>
        {screenWidth > 1024 ? (
          <FooterDesktop screenWidth={screenWidth} />
        ) : (
          <FooterMobile screenWidth={screenWidth} />
        )}
      </>
      <SocialAndDownload screenWidth={screenWidth} />
    </div>
  );
};

export default Footer;
