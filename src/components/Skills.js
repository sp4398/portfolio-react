import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDes">
        Proficient in Python and Django for backend web development, with a
        solid grasp of JavaScript, ReactJS, HTML, CSS and bootstrap for frontend
        and user interface design. Also Experienced in wordpress for creating
        dynamic and interactive web applications while ensuring proper
        structuring, styling, and responsiveness.
      </span>
      <div className="skillsBar">
        <div className="skillBar">
          <img src="website-design.png" alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frontend Design</h2>
            <p>You can write your content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src="ui-design.png" alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Backend Design</h2>
            <p>You can write your content here</p>
          </div>
        </div>{" "}
        <div className="skillBar">
          <img src="app-design.png" alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Wordpress Developer</h2>
            <p>You can write your content here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
