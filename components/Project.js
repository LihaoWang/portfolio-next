import React from "react";
import Link from "next/link";
function Project() {
  return (
    <section className="project adjust" id="project">
      <div className="title">
        <h2>Recent Work</h2>
      </div>
      <div className="content">
        <a href="https://github.com/LihaoWang/Website-blocker">
          <div className="workBx">
            <div className="imgBx">
              <img src="freedom-thumbnail-1.jpg" alt="" />
            </div>
            <div className="textBx">
              <h3 style={{ textAlign: "center" }}>Freedom Website Blocker</h3>
            </div>
          </div>
        </a>
        <a href="https://github.com/LihaoWang/ulinks">
          <div className="workBx">
            <div className="imgBx">
              <img src="ulinks-thumbnail-1.png" alt="" />
            </div>
            <div className="textBx">
              <h3>Ulinks</h3>
            </div>
          </div>
        </a>
        <a href="https://github.com/LihaoWang/xchange">
          <div className="workBx">
            <div className="imgBx">
              <img src="xchange-thumbnail.png" alt="" />
            </div>
            <div className="textBx">
              <h3>Xchange</h3>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Project;
