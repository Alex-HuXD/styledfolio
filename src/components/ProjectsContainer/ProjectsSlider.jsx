import React, { useState } from "react";
import styled from "styled-components";

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
    <Slider>
      {sliderArr.map((item, i) => {
        return (
          <Slide key={i} style={{ transform: `translateX(${x}%)` }}>
            {item}
          </Slide>
        );
      })}

      <LeftBtn onClick={left}>left</LeftBtn>
      <RightBtn onClick={right}>right</RightBtn>
    </Slider>
  );
};

export default ProjectsSlider;

const Slider = styled.div`
  position: relative;
  border: 1px solid red;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  padding: 15%;
  display: flex;
  gap: 5%;
  align-items: center;
  overflow-x: hidden;
`;

const Slide = styled.div`
  position: relative;
  border: 1px solid blue;
  min-width: 80%;
  height: 65%;
  transition: 0.5s ease;
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
