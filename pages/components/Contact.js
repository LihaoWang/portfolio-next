import React from "react";

function Contact() {
  return (
    <section className="contact adjust" id="contact">
      <div className="title">
        <h2>Let&apos;s Say Hi</h2>
      </div>
      <div className="contactForm">
        <div className="row">
          <input type="text" name="" placeholder="First Name" />
          <input type="text" name="" placeholder="Last Name" />
        </div>
        <div className="row">
          <input type="text" name="" placeholder="Email Address" />
          <input type="text" name="" placeholder="Mobile No." />
        </div>
        <div className="row2">
          <textarea placeholder="Message"></textarea>
        </div>
        <div className="row2">
          <input type="submit" value="Send" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
