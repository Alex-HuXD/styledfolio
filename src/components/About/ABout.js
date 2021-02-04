import React from "react";
import "./about.style.css";
import img from "./img.jpg";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
  DiPostgresql,
  DiMysql,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";

const ABout = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="left side">
              <img src={img} alt="portfolio" />
            </div>
            <div className="right side">
              <div className="text">
                I'm Alex, and I'm a <sapn>developer</sapn>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos molestias quidem adipisci deserunt architecto
                distinctio nostrum laboriosam dolore, nisi voluptas quam, vel
                temporibus! Officiis laborum minima dolor, magnam tempora
                cupiditate?
              </p>
              <a href="#" className="resume">
                my resume
              </a>
            </div>
          </div>
          <div className="skill-badge">
            <DiJavascript1 />
            <DiHtml5 />
            <DiCss3 />
            <FaNodeJs />
            <DiReact />
            <DiPostgresql />
            <DiMysql />
            <DiMongodb />
            <GrGraphQl />
            <FaPython />
            <DiGithubBadge />
          </div>
        </div>
      </section>
    </>
  );
};

export default ABout;
