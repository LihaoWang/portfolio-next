import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Banner() {
  const resumeURL = process.env.NEXT_PUBLIC_RESUME_URL;
  console.log(process.env.NEXT_PUBLIC_RESUME_URL);
  return (
    <section className="banner" id="banner">
      <div className="content">
        <div className="imgBx">
          <img src="avatar.png" alt="" />
        </div>
        <h3>Lihao Wang</h3>
        <p style={{ fontSize: "1.1em", marginBottom: "15px" }}>
          I&apos;m a Software Engineer and Web Designer
        </p>
        <a href={resumeURL} className="btn">
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
