import React from "react";
import styled from "styled-components";
import img from "./img.jpg";

const AboutMe = () => {
  return (
    <>
      <HeroSection>
        <Intro>
          <Title>About Me</Title>
          <Content>
            <Left src={img} alt="#" />
            <Right>
              Hello, I'm Alex, <br />
              I'm full-stack developer with a passion for developing innovative
              programs and a proud father of two awesome daughters
            </Right>
          </Content>
        </Intro>
      </HeroSection>
    </>
  );
};

export default AboutMe;

const HeroSection = styled.div`
  height: 100vh;
  padding: 100px 0;
  background: whitesmoke;
`;

const Intro = styled.div`
  margin: 55px 50px;
  height: 400px;
`;

const Title = styled.div`
  position: relative;
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 60px;
  padding-bottom: 15px;

  @media screen and (max-width: 960px) {
    font-size: 38px;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 170px;
    height: 2px;
    background: #111;
    transform: translateX(-50%);
  }

  &::after {
    content: "who I am";
    position: absolute;
    bottom: -16px;
    left: 50%;
    font-size: 20px;
    padding: 5px;
    color: var(--hight-light);
    background: whitesmoke;
    transform: translateX(-50%);

    @media screen and (max-width: 960px) {
      font-size: 14px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 30px;
  align-items: center;
  justify-content: space-around;
  margin-top: 120px;
`;

const Left = styled.img`
  width: auto;
  height: 300px;
  border-radius: 18px;
`;

const Right = styled.p`
  width: 60%;
  font-size: 30px;
  font-weight: 600;
  /* font-family: "Open Sans", sans-serif; */

  @media screen and (max-width: 960px) {
    font-size: 22px;
    font-weight: 400;
    padding: 10px 0;
    margin: 0;
  }
`;
