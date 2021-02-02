import React from "react";
import styled from "styled-components";
import img from "./portfolio-pic.jpg";
import { Span } from "../../GlobalStyle";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HomePage = () => {
  return (
    <>
      <Intro>
        <Text1>Hello,</Text1>
        <Text2>My name is Alex Hu</Text2>
        <Text3>
          And I'm a <Span>full-stack developer</Span>
        </Text3>
        <SocialLogo>
          <Linkedin
            href="https://www.linkedin.com/in/alex-hu-b11399b3/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </Linkedin>

          <GitHub
            href="https://github.com/Alex-HuXD"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </GitHub>
          <Email>
            <MdEmail />
          </Email>
        </SocialLogo>
        {/* <Hire>Let's talk</Hire> */}
      </Intro>
    </>
  );
};

export default HomePage;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${img}) center no-repeat;
  background-size: cover;
  justify-content: center;
  color: whitesmoke;
  height: 100vh;
  min-height: 500px;
  padding-top: 20%;
`;

const Text1 = styled.div`
  color: whitesmoke;
  margin-left: 3rem;
  font-size: 2rem;
  font-weight: 600;
  font-style: italic;

  @media screen and (max-width: 960px) {
    margin-left: 1.5rem;
    font-size: 1.5rem;
    font-weight: 800;
  }
`;
const Text2 = styled.div`
  color: whitesmoke;
  margin-left: 3rem;
  font-size: 3.5rem;
  font-weight: 800;
  font-style: italic;

  @media screen and (max-width: 960px) {
    margin-left: 1.5rem;
    font-size: 2rem;
    font-weight: 600;
  }
`;
const Text3 = styled.div`
  color: whitesmoke;
  margin-left: 3rem;
  font-size: 2.1rem;
  font-weight: 800;

  @media screen and (max-width: 960px) {
    margin-left: 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const Hire = styled(Link)`
  margin-left: 3rem;
  margin-top: 1.5rem;
  font-size: 1rem;
  font-style: italic;
  background: var(--bg-dark);
  color: var(--yellow);
  width: 5.5rem;
  text-decoration: none;
  text-align: center;
  border-radius: 15px;

  @media screen and (max-width: 960px) {
    margin-left: 1.5rem;
  }
`;

const SocialLogo = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
  background: transparent;
  border-radius: 15px;
  width: 180px;
  height: 60px;
  margin-left: 2.1rem;
  color: white;
  text-decoration: none;

  @media screen and (max-width: 960px) {
    margin-left: 0.5rem;
  }
`;

const Linkedin = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    color: var(--yellow);
  }
`;
const GitHub = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    color: var(--yellow);
  }
`;
const Email = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    color: var(--yellow);
  }
`;
