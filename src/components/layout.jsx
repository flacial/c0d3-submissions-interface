import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";
import "@fontsource/rubik";

const StyledLayout = styled.div`
width: 100%;
height: 100%;
font-family: Rubik;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 20px 10px;
font-display: fallback;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>C0D3 Submissions - Flacial</title>
      </Helmet>
      <StyledLayout>
        {children}
      </StyledLayout>
    </>
  );
};

export default Layout;
