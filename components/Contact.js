import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [error, setError] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    setError("");
    emailjs
      .sendForm(
        "service_zfzdr6o",
        "template_qrca9st",
        e.target,
        "user_aVlbRtl238RBkX32R02c0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setError(
            "Email sent successfully. I will respond as soon as possible."
          );
        },
        (error) => {
          console.log(error.text);
          setError("Failed to send email");
        }
      );

    e.target.reset();
  }
  return (
    <section className="contact adjust" id="contact">
      <div className="title">
        <h2>Let&apos;s Say Hi</h2>
      </div>
      <form className="contactForm" onSubmit={onSubmit}>
        <div className="row">
          <input placeholder="Name" name="name" />
          <input placeholder="Email" type="email" name="email" required />
        </div>

        <div className="row2">
          <textarea placeholder="Message" name="message" required />
        </div>
        {error && (
          <p style={{ textAlign: "center", marginTop: "10px" }}>{error}</p>
        )}
        <div className="row2">
          <input type="submit" />
        </div>
      </form>
    </section>
  );
}

export default Contact;
