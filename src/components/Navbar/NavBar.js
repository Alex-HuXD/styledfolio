import React, { useState } from "react";
import "./NavBar.style.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  // hide bg color
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
            <a href="#">
              My<span>folio.</span>
            </a>
          </div>
          <ul className={click ? `menu` : `menu active`}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">ABout Me</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact Me</a>
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
