import React from "react";
import "./Intro.css";
import { Link } from "react-scroll";

const Intro = () => {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/saurav-pandey-b399731a0/");
  };
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="intrText">
          I'm <span className="introName">Saurav</span>
          <br />
          Website Developer
        </span>
        <p className="introPara">
          I'm a web developer with experience in creating visually <br />{" "}
          appealing and user-friendly website
        </p>
        <Link to="/#">
          <button className="btn" onClick={openLinkedIn}>
            <img src="hireme.png" alt="hire me" className="btnImg" />
            LinkedIn
          </button>
        </Link>
      </div>
      <img src="image.png" alt="Saurav" className="bg" />
    </section>
  );
};

export default Intro;
