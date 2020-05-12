import React from "react";
import linkedIn from "../../assets/LinkedIn.svg";

const Footer = () => {
  return (
    <footer>
      <span className="content">Created by Shahbaz Gul Khan</span>
      <span className="linked-in">
        Connect
        <a
          href={process.env.REACT_APP_LINKEDIN_URL}
          rel="noreferrer noopener"
          target="_blank"
        >
          <img src={linkedIn} className="footer-logo" alt="linkedIn" />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
