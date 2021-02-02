import React from "react";
import styled from "styled-components";
import Gallery from "../../components/AboutGallery/Gallery";

const AboutMe = () => {
  return (
    <>
      <HeroSection>
        <Intro>
          <Title>About Me</Title>
          <Content>
            <Gallery />

            <Text>
              Hello, my name is Alex Hu, <br />
              I'm a Proud father of two awesome daughters and Self-taught
              developer with a passion for developing innovative programs.
            </Text>
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
`;

const Intro = styled.div`
  margin: 55px 50px;
`;

const Title = styled.div`
  position: relative;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 60px;
  padding-bottom: 15px;

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
    background: white;
    transform: translateX(-50%);
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px 30px;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  width: 55%;
  font-size: 25px;
  font-weight: 600;

  @media screen and (max-width: 960px) {
    font-size: 18px;
    font-weight: 400;
  }
`;
