import React from "react";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%; 
    background: linear-gradient(44deg, hsl(195.5,100%,44.1%), hsl(188deg 98% 47%));
  }
  #gatsby-focus-wrapper, #___gatsby {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
`;

const StyledLayout = styled.div`
width: 100%;
height: 100%;
font-family: Rubik;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 20px;
`

const Layout = ({ children }) => {
  return (<>
    <Helmet>
      <title>C0D3 Submissions - Flacial</title>
    </Helmet>
    <StyledLayout>
      <GlobalStyle theme="purple" />
      {children}
    </StyledLayout>
  </>
  );
};

export default Layout;
