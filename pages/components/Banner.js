import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="content">
        <div className="imgBx">
          <img src="user.jpg" alt="" />
        </div>
        <h3>Lihao Wang</h3>
        <p>I&apos;m a Software Engineer and Web Designer</p>
        <a href="#" className="btn">
          Download my resume
        </a>
        <ul className="socialMedia">
          <li>
            <a href="https://github.com/LihaoWang">
              <FaGithub />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/lihao-wang-3ab84115b/">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Banner;
