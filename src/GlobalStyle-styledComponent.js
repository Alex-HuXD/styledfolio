import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap');
:root{
    --bg-dark:#202020;
    --bg-light:#3f3f3f;
    --bg-blue:#12343b;
    --yellow:#c89666;
    --hight-light:#b48c36;
}

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    text-decoration:none;
    font-family:'Poppins', sans-serif;
    
}

html {
  scroll-behavior:smooth;
}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 960px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const Span = styled.span`
  color: var(--hight-light);

  &:hover {
    color: var(--hight-light);
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 10px;
  white-space: nowrap;
  color: whitesmoke;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    width: 100%auto;
  }
`;

export default GlobalStyle;
