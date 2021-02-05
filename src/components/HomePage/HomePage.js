import React from "react";
import "./HomePage.style.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HomePage = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="container">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Alex Hu</div>
            <div className="text-3">
              And I'm a <span>Full-Stack Developer</span>
            </div>
            <div className="social-media">
              <a
                href="https://www.linkedin.com/in/alex-hu-b11399b3/"
                target="_blank"
              >
                <FaLinkedin style={{ color: "whitesmoke" }} />
              </a>
              <a href="https://github.com/Alex-HuXD" target="_blank">
                <FaGithub style={{ color: "whitesmoke" }} />
              </a>
              <a href="#contact">
                <MdEmail style={{ color: "whitesmoke" }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
