import React from "react";
import "./Footer.css";
import { FaCopyright, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="https://twitter.com/AlexHu64003757">
          <FaTwitter />
        </a>
        <a href="https://github.com/Alex-HuXD">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/alex-hu-b11399b3/">
          <FaLinkedin />
        </a>
      </div>
      <hr />
      <div className="text">
        <FaCopyright /> 2021 - Template developed by <span>Alex Hu</span> | All
        rights reserved
      </div>
    </footer>
  );
};

export default Footer;
