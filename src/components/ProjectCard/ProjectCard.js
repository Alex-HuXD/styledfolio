import React from "react";
import styled from "styled-components";

const ProjectCard = ({ style, item }) => {
  return (
    <Card style={style}>
      {item}
      <CodeLinks>
        <Links href="">Demo</Links>
        <Links href="">source code</Links>
      </CodeLinks>
    </Card>
  );
};

export default ProjectCard;

const Card = styled.div`
  border: 1px solid blue;
  background: black;
  border-radius: 8px;
  width: 80%;
  min-width: 65%;
  height: 80%;
  transition: 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 60px;

  @media screen and (max-width: 760px) {
    height: 60%;
  }
`;

const CodeLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const Links = styled.a`
  font-size: 20px;
  text-align: center;
  font-family: "Encode Sans", sans-serif;
  color: whitesmoke;
  background: rgba(20, 19, 19, 0.3);
  border-radius: 25px;
  padding: 5px 15px;

  @media screen and (max-width: 760px) {
    font-size: 14px;
    padding: 2px 5px;
  }
`;
