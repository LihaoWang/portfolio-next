import React from "react";

function Nav() {
  return (
    <div>
      <div className="navigation">
        <ul>
          <li>
            <a href="#banner">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          {/* <li>
            <a href="#services">Services</a>
          </li> */}

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
