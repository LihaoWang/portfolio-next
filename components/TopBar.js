import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useToggle, useToggleUpdate } from "../ToggleContext";
function TopBar() {
  const toggle = useToggle();
  const handleClick = useToggleUpdate();
  return (
    <div className={`topbar ${toggle ? "active" : ""}`}>
      <a href="#" className="logo">
        Leo Wang
      </a>
      <div onClick={handleClick} className="toggle">
        <AiOutlineMenu />
      </div>
    </div>
  );
}

export default TopBar;
