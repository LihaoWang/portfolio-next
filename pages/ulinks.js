import React from "react";
import Nav from "../components/Nav";
import TopBar from "../components/TopBar";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
function ulinks() {
  return (
    <div>
      <div className="">
        <div className="project-nav">
          <Link href="/">
            <AiFillHome className="home-btn" />
          </Link>
        </div>

        <section className="project-section">
          <div className="content project-content">
            <h1>Ulinks</h1>
            <div className="btn-wrapper">
              <a href="#" className="btn">
                Live demo
              </a>
              <a href="#" className="btn">
                Github Repo
              </a>
            </div>
            <img className="project-img" src="ulinks-thumbnail.png" alt="" />
            <img className="project-img" src="ulinks-1.png" alt="" />
            <img className="project-img" src="ulinks-2.png" alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ulinks;
