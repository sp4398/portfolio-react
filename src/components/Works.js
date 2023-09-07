import React from "react";
import "./Works.css";

const Works = () => {
  const openLink = () => {
    window.open("https://github.com/sp4398?tab=repositories");
  };
  return (
    <section id="works">
      <h2 className="worksTitle">My Project</h2>
      <span className="workDesc">
        I take a pride in paying attention to the smallest details and making
        sure that my work is pixel perfect. I am excited to bring my skills and
        expwerience to help business achieve their goals and strong online
        presence.
      </span>
      <div className="worksImg">
        <a href="https://github.com/sp4398/Chatting_app.git" target="_blank" rel="noreferrer">
          <img src="images.png" alt="" className="workImg" />{" "}
          <div className="text-popup">Your Popup Text</div>
        </a>
        <a
          href="https://github.com/sp4398/Breast-Cancer-Detection-ML.git"
          target="_blank" rel="noreferrer"
        >
          <img src="breast1.jpg" alt="" className="workImg" />
        </a>
        <a href="https://sp4398.github.io/lgm-vip-task1/" target="_blank" rel="noreferrer">
          <img src="to-do-list.png" alt="" className="workImg" />
        </a>
        <a href="https://github.com/sp4398/2048-Game.git" target="_blank" rel="noreferrer">
          <img src="2048.jpg" alt="" className="workImg" />
        </a>
        <a href="https://sp4398.github.io/lgm-vip-task4/" target="_blank" rel="noreferrer">
          <img src="calculator.jpg" alt="" className="workImg" />
        </a>
        <a href="https://sp4398.github.io/reaction-tester/" target="_blank" rel="noreferrer">
          <img src="reaction.jpg" alt="" className="workImg" />
        </a>
      </div>
      <button className="worksBtn" onClick={openLink}>
        See More
      </button>
    </section>
  );
};

export default Works;
