import React, { useState } from "react";
import styled from "styled-components";
import MoreIcon from "../images/moreIcon.svg";
import DiscordIcon from "../images/discordIcon.svg";
import RepoIcon from "../images/repoIcon.svg";
import ToggleAsideButton from "./AsideToggleButton";
import AsideLink from './AsideLink';

const StyledAsideLinks = styled.div`
width: 95px;
background-color: rgb(0 35 60 / 47%);
box-shadow: 0px 0px 20px -2px ${({ isVisible }) => isVisible ? "rgba(15,69,89,0.47)" : "transparent"};
position: absolute;
bottom: 0;
right: 0;
border-top: 3px solid #135b72;

// Workaround to hide the bottom right border when it's hidden
border-radius: 0 8px ${({ isVisible }) => isVisible ? "8px" : "50px"} 0;

display: flex;
align-items: center;
justify-content: center;
padding-left: 23px;
padding-block: 20px;
row-gap: 10px;
flex-direction: column;
transform: ${({ toRight }) => toRight && toRight};
backdrop-filter: blur(4px);

transition: transform ${({ isVisible }) => isVisible ? "ease-out 0.4s" : "ease-in 0.2s"}, border-radius ease 0.4s, box-shadow ease 0.4s;

@media (max-width: 600px) {
    top: 100px;
    left: -70px;
    bottom: auto;
    right: auto;
    padding-left: 0;
    z-index: 30;
    width: 70px;
    border-radius: 0 8px 8px 0;
    border-top-color: #1ab9eb;
}
`

const AsideLinks = () => {
    const [right, setRight] = useState("0");
    const toRightValue = "70px";

    return (
        <StyledAsideLinks toRight={`translateX(${right})`} isVisible={right !== "0"}>
            <AsideLink>
                <a rel="noreferrer" href="https://discord.gg/c0d3" target="_blank">
                    <DiscordIcon />
                </a>
            </AsideLink>
            <AsideLink>
                <a rel="noreferrer" href="https://www.c0d3.com" target="_blank">
                    <span>C0D3</span>
                </a>
            </AsideLink>
            <AsideLink>
                <a rel="noreferrer" href="https://github.com/flacial/c0d3-submissions-interface" target="_blank">
                    <RepoIcon />
                </a>
            </AsideLink>
            <ToggleAsideButton setRight={setRight} right={toRightValue}>
                <MoreIcon />
            </ToggleAsideButton>
        </StyledAsideLinks>
    )
}

export default AsideLinks;