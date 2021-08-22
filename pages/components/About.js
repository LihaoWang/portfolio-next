import React from "react";

function About() {
  return (
    <section className="about adjust" id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="content">
        <div className="textBox">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            eligendi ratione quisquam. Ut officia perferendis nesciunt
            laudantium nisi voluptatibus repudiandae praesentium architecto.
            Recusandae odio iste ipsum consequatur aliquid obcaecati, quam
            necessitatibus quos laboriosam saepe, ullam dolores veritatis sunt
            error possimus omnis enim asperiores ad nemo placeat. Est enim
            doloribus exercitationem ex quam? Animi incidunt quam suscipit fuga
            labore et consequuntur reiciendis autem voluptate! In sed veritatis
            error.
          </p>
        </div>
        <div className="imgBx">
          <img style={{ maxHeight: "50vh" }} src="bg1.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
