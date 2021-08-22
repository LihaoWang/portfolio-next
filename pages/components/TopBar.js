import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
function TopBar() {
  return (
    <div className="topbar">
      <a href="#" className="logo">
        Leo Wang
      </a>
      {/* <div className="toggle">
        <i aria-hidden="true">
          <AiOutlineMenu />
        </i>
      </div> */}
    </div>
  );
}

export default TopBar;
