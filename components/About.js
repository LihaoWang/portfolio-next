import React from "react";

function About() {
  return (
    <section className="about adjust" id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="content">
        <div className="textBox">
          <p className="about-text">
            Lihao Wang is a second-year Master's student in Computer Science at
            NYU Tandon School of Engineering. He had experience in developing
            web applications using React (Next.js), Firebase, and CSS. Lihao is
            a self-motivated person and enjoys trying out new technology. In his
            spare time, he created a Chrome browser extension that helps users
            manage their time and a bio link platform that enables users to
            share links on one page easily. Besides the technical aspect, he is
            also experienced in Web Design and UX Design. He believes great
            products should be not only functional but also easy to use. His
            passion for creating aesthetic and intuitive products originates
            from the desire to impact and help others.
          </p>
        </div>
        <div style={{ maxWidth: "800px" }} className="imgBx">
          <img src="me.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
