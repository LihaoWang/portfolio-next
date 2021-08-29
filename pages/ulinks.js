import React from "react";
import Nav from "../components/Nav";
import TopBar from "../components/TopBar";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
function ulinks() {
  return (
    <div>
      <div className="">
        <Link href="/">
          <div className="project-nav">
            <AiFillHome className="home-btn" />
          </div>
        </Link>

        <section className="project-section">
          <div className="content project-content">
            <h1>Ulinks</h1>
            <div className="btn-wrapper">
              <a target="_blank" href="https://ulinks.cool" className="btn">
                Live demo
              </a>
              <a
                target="_blank"
                href="https://github.com/LihaoWang/ulinks"
                className="btn"
              >
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
