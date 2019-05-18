import React, { Component } from "react";
import "./skills.scss";
import { Element } from "react-scroll";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { Progress, Segment } from "semantic-ui-react";

export default class Skills extends Component {
  render() {
    return (
      <Element className="skills" name="skills">
        <center>
          <h1>SKILLS</h1>
        </center>
        <div className="column">
          <div className="row">
            <Segment inverted>
              <div className="linear">
                <Progress percent={85} inverted color="blue" active progress />
              </div>
              <div className="linear">
                <Progress percent={85} inverted color="blue" active progress />
              </div>
              <div className="linear">
                <Progress percent={85} inverted color="blue" active progress />
              </div>
            </Segment>
          </div>
          <div className="row">
            <Segment inverted>
              <div className="linear">
                <Progress percent={85} inverted color="blue" progress />
              </div>
              <div className="linear">
                <Progress percent={85} inverted color="blue" progress />
              </div>
              <div className="linear">
                <Progress percent={85} inverted color="blue" progress />
              </div>
            </Segment>
          </div>
        </div>
        <center>
          <h3>MORE SKILLS</h3>
        </center>
        <div className="grid">
          <div>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={91}
              duration={1.7}
              easingFunction={easeQuadInOut}
              repeat={false}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "#ffffff"
                    })}
                    strokeWidth={6}
                  />
                );
              }}
            </AnimatedProgressProvider>
            ;<div className="text">Leadership</div>
          </div>
          <div>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={62}
              duration={1.7}
              easingFunction={easeQuadInOut}
              repeat={false}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "#ffffff"
                    })}
                    strokeWidth={6}
                  />
                );
              }}
            </AnimatedProgressProvider>
            ;<div className="text">Creativity</div>
          </div>
          <div>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={68}
              duration={1.7}
              easingFunction={easeQuadInOut}
              repeat={false}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "#ffffff"
                    })}
                    strokeWidth={6}
                  />
                );
              }}
            </AnimatedProgressProvider>
            ;<div className="text">Management</div>
          </div>
          <div>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={100}
              duration={1.7}
              easingFunction={easeQuadInOut}
              repeat={false}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "#ffffff"
                    })}
                    strokeWidth={6}
                  />
                );
              }}
            </AnimatedProgressProvider>
            ;<div className="text">Hardwork</div>
          </div>
          <div>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={100}
              duration={1.7}
              easingFunction={easeQuadInOut}
              repeat={false}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "#ffffff"
                    })}
                    strokeWidth={6}
                  />
                );
              }}
            </AnimatedProgressProvider>
            ;<div className="text">Will Power</div>
          </div>
          <div>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={100}
              duration={1.7}
              easingFunction={easeQuadInOut}
              repeat={false}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "#ffffff"
                    })}
                    strokeWidth={6}
                  />
                );
              }}
            </AnimatedProgressProvider>
            ;<div className="text">Motivation</div>
          </div>
        </div>
      </Element>
    );
  }
}
