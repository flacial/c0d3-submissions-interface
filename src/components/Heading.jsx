import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
background: linear-gradient(135deg,#b9edff,#fff);
text-shadow: ${(props) =>
        props.primary === true ? "0px 2px 17px rgba(20,94,120,0.44)" : "none"};
color: white;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 48px;
font-weight: 700;
position: ${(props) => (props.primary ? "initial" : "absolute")};
top: ${(props) => (props.primary ? "auto" : "0")};

@media (max-width: 480px) {
    font-size: 40px;
}

@media (max-width: 400px) {
    font-size: 36px;
}

@media (max-width: 370px) {
    font-size: 32px;
}

@media (max-width: 330px) {
    font-size: 28px;
}
`;

const HeadingShadowWorkaround = styled.div`
position: relative;
margin-bottom: 30px;
`;

const HeadingComponent = ({ children }) => (
    <HeadingShadowWorkaround>
        <Heading primary>{children}</Heading>
        <Heading>{children}</Heading>
    </HeadingShadowWorkaround>
)

export default HeadingComponent;