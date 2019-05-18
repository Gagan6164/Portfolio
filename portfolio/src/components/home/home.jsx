import React, { Component } from "react";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import "./home.scss";
import Particles from "react-particles-js";
import ReactTypingEffect from "react-typing-effect";
export default class Home extends Component {
  render() {
    return (
      <Element name="home" className="home">
        <div className="overlay">
          <Particles
            params={{
              particles: {
                number: {
                  value: 100
                },
                size: {
                  value: 4
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
              }
            }}
          />
          <span />
        </div>
        <div>
          <div className="home_name">H! it's me Gagan</div>
          <div className="home_det">
            <ReactTypingEffect
              text={["Hello", "World"]}
              staticText="I am a "
              speed="100"
              eraseDelay="100"
            />
          </div>
          <div className="home_abt">
            <Link
              activeClass="nav_array_active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="nav_items"
            >
              About Me
            </Link>
          </div>
        </div>
      </Element>
    );
  }
}
