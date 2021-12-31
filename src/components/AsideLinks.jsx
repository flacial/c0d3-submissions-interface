import React, { useState } from "react";
import styled from "styled-components";
import MoreIcon from "/public/static/moreIcon.svg";
import DiscordIcon from "/public/static/discordIcon.svg";
import RepoIcon from "/public/static/repoIcon.svg";
import ToggleAsideButton from "./AsideToggleButton";
import AsideLink from './AsideLink';

const StyledAsideLinks = styled.div`
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

const AsideLinks = () => {
    const [right, setRight] = useState("0");
    const toRightValue = "72px";

    return (
        <StyledAsideLinks toRight={`translateX(${right})`} isVisible={right === "72px"}>
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