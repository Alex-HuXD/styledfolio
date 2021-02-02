import React from "react";
import styled from "styled-components";
import IMG_1 from "./about-photos/IMG_1.JPG";

const Gallery = () => {
  return (
    <Slider>
      <Slide src={IMG_1} alt="#" />
    </Slider>
  );
};

export default Gallery;

const Slider = styled.div`
  height: 400px;
  width: auto;
  object-fit: cover;
  border-radius: 25px;
  display: flex;
`;

const Slide = styled.img`
  height: 100%;
  width: auto;
  border-radius: 15px;
`;
