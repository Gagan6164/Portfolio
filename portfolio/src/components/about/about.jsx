import React, { Component } from "react";
import "./about.scss";
import { Element } from "react-scroll";

export default class About extends Component {
  render() {
    return (
      <Element className="about" name="about">
        <div className="container">
          <div>
            <center>
              <img
                src={require("../../static/images/about-me.png")}
                alt="photo"
              />
            </center>
          </div>
          <div className="about_desc">
            <h1>HELLO IT'S MY STORY</h1>
            <p>
              I am a sophomore at IIT Roorkee, studying B. Tech. Engineering
              Physics. I have a keen interest in Programming. My areas of
              interests include Machine learning and deep learning. I love to
              play with tech around me. I'm a quick learner and a problem solver
              with an experience in the web development and data science.
            </p>
          </div>
        </div>
      </Element>
    );
  }
}
