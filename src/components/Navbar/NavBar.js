import React, { useState } from "react";
import "./NavBar.style.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [bg, setBg] = useState(false);
  const [click, setClick] = useState(true);

  const handleBg = () => {
    window.scrollY > 20 ? setBg(true) : setBg(false);
  };

  const handleClick = () => setClick(() => !click);

  window.addEventListener("scroll", handleBg);

  return (
    <>
      <div className={bg ? `navbar active` : `navbar`}>
        <div className="container">
          <div className="logo">
            <a href="#home">
              My<span>folio.</span>
            </a>
          </div>
          <ul className={click ? `menu` : `menu active`} onClick={handleClick}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
          <div className="menu-btn">
            {click ? (
              <FaBars onClick={handleClick} />
            ) : (
              <FaTimes onClick={handleClick} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
