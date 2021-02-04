import React, { useState } from "react";
import styled from "styled-components";
import Card from "../ProjectCard/ProjectCard";

const ProjectsSlider = () => {
  const [x, setX] = useState(0);

  let sliderArr = [1, 2, 3, 4, 5];

  const left = () => {
    x >= 0 ? setX(-400) : setX(x + 100);
  };
  const right = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <ProjectsContainer>
      <SubTitle>My Projects</SubTitle>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <div
          style={{ height: "2px", width: "50px", background: "yellow" }}
        ></div>
        <h3>what I made</h3>
        <div
          style={{ height: "2px", width: "50px", background: "yellow" }}
        ></div>
      </div>
      <Slider>
        {sliderArr.map((item, i) => {
          return (
            <Card
              key={i}
              style={{ transform: `translateX(${x}%)` }}
              item={item}
            />
          );
        })}

        <LeftBtn onClick={left}>left</LeftBtn>
        <RightBtn onClick={right}>right</RightBtn>
      </Slider>
    </ProjectsContainer>
  );
};

export default ProjectsSlider;

const ProjectsContainer = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: dodgerblue;
  font-family: "Ubuntu", sans-serif;
`;

const SubTitle = styled.h3`
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  bottom: 8px;
`;

const Slider = styled.div`
  position: relative;
  border: 1px solid red;
  background: green;
  box-sizing: border-box;
  width: 80%;
  height: 60%;
  margin: 35px 0;
  padding: 20px 20px;
  display: flex;
  gap: 16px;
  align-items: center;
  overflow-x: hidden;

  @media screen and (max-width: 960px) {
  }
`;

const LeftBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 6%;
  height: 65%;
  background: none;
`;

const RightBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 6%;
  height: 65%;
`;
