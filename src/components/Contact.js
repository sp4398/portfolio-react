import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_45u59nd",
        "template_mfezalq",
        form.current,
        "SScKXZIPNysul252P"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            placeholder="Your Message"
            name="message"
            rows="5"
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="links">
            <a
              href="https://www.facebook.com/saurav.pandey.16547008/"
              target="_blank"
            >
              <img src="facebook-icon.png" alt="fb" className="link" />
            </a>
            <a href="https://twitter.com/sp4398" target="_blank">
              <img src="twitter.png" alt="twitter" className="link" />
            </a>
            <a href="https://www.instagram.com/sp4398/" target="_blank">
              <img src="instagram.png" alt="instagram" className="link" />
            </a>
            <a href="https://github.com/sp4398" target="_blank">
              <img src="gitHub.png" alt="gitHub" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
