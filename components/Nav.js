import React from "react";
import { useToggle, useToggleUpdate, useUpdateTheme } from "../ToggleContext";
import { isMobile } from "react-device-detect";
function Nav() {
  const toggle = useToggle();
  const setToggle = useToggleUpdate();
  const setTheme = useUpdateTheme();
  const handleClick = () => {
    if (isMobile) {
      setToggle();
    }
  };
  const updateTheme = () => {
    setTheme();
  };
  return (
    <div>
      <div className={`navigation ${toggle ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#banner" onClick={handleClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleClick}>
              About
            </a>
          </li>
          <li>
            <a href="#project" onClick={handleClick}>
              Projects
            </a>
          </li>
          {/* <li>
            <a href="#services">Services</a>
          </li> */}

          <li>
            <a href="#contact" onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
        <div className="themeSwitch" onClick={updateTheme}></div>
      </div>
    </div>
  );
}

export default Nav;
