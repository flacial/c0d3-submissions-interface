import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Layout from "../components/layout";
import { JS5, JS6 } from "../data/challenges";
import "@fontsource/rubik";
import ExternalLinkIcon from "/public/static/external-link-icon.svg";
import MoreIcon from "/public/static/moreIcon.svg";
import discordIcon from "../images/discordIcon.png";
import codeIcon from "../images/codeIcon.png";
import repoIcon from "../images/repoIcon.png";
import { CHALLENGES_WEBSITE } from "../constants/constants";

const Main = styled.main`
  width: 100%;
  height: 100%;
  font-family: Rubik;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h1`
  background: linear-gradient(135deg, #a9e9ff, #ffffff);
  text-shadow: ${(props) =>
    props.primary ? "0px 2px 17px rgba(20,94,120,0.44)" : "none"};
  color: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 48px;
  font-weight: 700;
  position: ${(props) => (props.primary ? "initial" : "absolute")};
  top: ${(props) => (props.primary ? "auto" : "0")};
`;

const Line = styled.div`
display: ${({ vertical }) => vertical ? "inline" : "block"};
border: solid ${({ borderWidth }) => borderWidth ? borderWidth : "1.5px"} ${({ vertical }) => vertical ? "rgba(0, 103, 179, 0.2)" : "rgba(0, 103, 179, 0.1)"};
background-color: ${({ vertical }) => vertical ? "rgba(0, 103, 179, 0.2)" : "rgba(0, 103, 179, 0.1)"};
`;

const Button = styled.button`
  width: 192px;
  height: 78px;
  border-radius: ${(props => (props.left === true ? "20px 0px 0px 0px" : props.right === true && "0px 20px 0px 0px"))};
  background-color: ${(props) => (props.focus ? "hsl(204.9, 100%, 17.5%)" : "hsl(205.3, 100%, 14.9%)")};
  border: 0;
  cursor: ${(props) => (props.focus ? "auto" : "pointer")};
  transition: background-color 0.3s ease;

& p {
  font-size: 36px;
  font-weight: 600;
  transition: color 0.3s ease;
  ${({ focus }) => focus ? `
  background: linear-gradient(135deg,#20d4b4,#0083E1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  ` : `color: hsl(195.7, 100%, 35.3%);`}
}

 ${({ focus }) => !focus && `
  &:hover {
    background-color: hsl(205.3, 100%, 15.45%);

    & p {
      color: hsl(195.7, 100%, 37.3%);
    }
  }
 `
  }
`;

const TabButtonsContainer = styled.div`
display: flex;
`;

const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(20px);
}

to {
  opactiy: 1;
}
`

const TabPanelsContainer = styled.div`
display: flex;
flex-direction: column;
position: relative;
padding: 10px 45px;
row-gap: 20px;
overflow-y: auto;
max-height: 80%;
height: 100%;
animation: ${fadeIn} 0.5s ease;

&::-webkit-scrollbar {
  width: 0.4rem;
}

&::-webkit-scrollbar-track {
  margin-bottom: 10px;
}

&::-webkit-scrollbar-thumb {
  width: 7.64px;
  height: 97.63px;
  border-radius: 4px;
  background: #007ea7
}
`

const Card = styled.div`
width: 384px;
height: 413px;
border-radius: 20px;
background: #003459;
box-shadow: 0px 0px 20px -2px rgba(15,69,89,0.47);
position: relative;
z-index: 20;
`;

const HeadingShadowWorkaround = styled.div`
position: relative;
margin-bottom: 30px;
`;

const Challenge = styled.div`
 h3 {
   color: #FFFFFF;
   font-weight: 500;
 }

 p {
  color: #007EA7;
  font-weight: 500;
 }
`

const AsideLinks = styled.div`
width: 95px;
height: 171px;
background: #002c4b;
box-shadow: 0px 0px 20px -2px ${({ isVisible }) => isVisible ? "rgba(15,69,89,0.47)" : "transparent"};
position: absolute;
bottom: 0;
right: 0;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
padding-left: 23px;
row-gap: 10px;
flex-direction: column;
transform: ${({ toRight }) => toRight && toRight};

transition: transform ${({ isVisible }) => isVisible ? "ease-out 0.4s" : "ease-in 0.2s"};
`

const IndexPage = () => {
  const Separator = () => {
    return <Line />;
  };

  const Tabs = ({ defaultTab }) => {
    const [currentTab, setCurrentTab] = useState(defaultTab || 0);

    const Tab = ({ content, tabIndex }) => {
      const ChallengeNameAndIcon = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;

      & div {
        padding: 10px;
        cursor: pointer;
      }

      svg {
        transition: filter 0.3s ease;
      }

      & div:hover svg {
        filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(138deg);
      }
      `

      const putContent = content.map(({ name, description, path }, i) => (
        <>
          <Challenge key={i}>
            <ChallengeNameAndIcon>
              <h3>{name}</h3>
              <div>
                <a rel="noreferrer" target="_blank" href={`${CHALLENGES_WEBSITE}/${path}`}>
                  <ExternalLinkIcon />
                </a>
              </div>
            </ChallengeNameAndIcon>
            <p>{description}</p>
          </Challenge>
          {
            i !== content.length - 1 && <Separator vertical />
          }
        </>
      ));

      return currentTab === tabIndex ? <>{putContent}</> : null;
    };

    const TabButton = ({ children, setCurrentTab, focus, left, right, tabIndex }) => {
      const handleTabClick = (tabIndex) => currentTab !== tabIndex && setCurrentTab(tabIndex);

      return (
        <Button right={right} left={left} focus={focus} onClick={() => handleTabClick(tabIndex)}>
          <p>{children}</p>
        </Button>
      );
    };

    return (
      <>
        <TabButtonsContainer>
          <TabButton tabIndex={0} left focus={currentTab === 0} setCurrentTab={setCurrentTab}>JS5</TabButton>
          <Separator vertical />
          <TabButton tabIndex={1} right focus={currentTab === 1} setCurrentTab={setCurrentTab}>JS6</TabButton>
        </TabButtonsContainer>
        <TabPanelsContainer>
          <Tab tabIndex={0} content={JS5} />
          <Tab tabIndex={1} content={JS6} />
        </TabPanelsContainer>
      </>
    );
  };
  const CardContainer = styled.div`
  position: relative;
  `

  const ToggleAsideButton = styled.button`
  width: 29px;
  height: 13px;
  background-color: hsl(204.8, 100%, 14.7%);
  box-shadow: inset 10px 0px 5px -13px;
  border: 0;
  border-radius: 0 4px 4px 0;
  position: absolute;
  right: -29px;
  top: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
  background-color: hsl(204.8, 100%, 16.7%);
  }
  `

  const AsideLink = styled.div`
  width: 36px;
  height: 35.58px;
  border-radius: 6px;
  background: hsl(195.5, 100%, 6.1%);
  display: grid;
  place-items: center;
  cursor: pointer;
  `

  const AsideLinksC = () => {
    const [right, setRight] = useState("0");
    const toRightValue = "72px";

    return (
      <AsideLinks toRight={`translateX(${right})`} isVisible={right === "72px"}>
        <AsideLink>
          <img src={discordIcon} href="discord icon"></img>
        </AsideLink>
        <AsideLink>
          <img src={codeIcon} href="code icon"></img>
        </AsideLink>
        <AsideLink>
          <img src={repoIcon} href="repo icon"></img>
        </AsideLink>
        <ToggleAsideButtonC setRight={setRight} right={toRightValue}>
          <MoreIcon />
        </ToggleAsideButtonC>
      </AsideLinks>
    )
  }

  const ToggleAsideButtonC = ({ setRight, children, right }) => {
    return <ToggleAsideButton onClick={() => setRight(prevRight => prevRight === "0" ? right : "0")}>{children}</ToggleAsideButton>
  }

  return (
    <Layout>
      <Main>
        <HeadingShadowWorkaround>
          <Heading primary>My Submissions</Heading>
          <Heading>My Submissions</Heading>
        </HeadingShadowWorkaround>
        <CardContainer>
          <Card>
            <Tabs defaultTab={0} />
          </Card>
          <AsideLinksC />
          {/* <AsideLinks>
            <AsideLink>
              <img src={discordIcon} href="discord icon"></img>
            </AsideLink>
            <AsideLink>
              <img src={codeIcon} href="code icon"></img>
            </AsideLink>
            <AsideLink>
              <img src={repoIcon} href="repo icon"></img>
            </AsideLink>
            <ToggleAsideButton>
              <MoreIcon />
            </ToggleAsideButton>
          </AsideLinks> */}
        </CardContainer>
      </Main>
    </Layout>
  );
};

export default IndexPage;
