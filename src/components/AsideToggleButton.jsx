import React from 'react';
import styled from "styled-components"

const StyledToggleAsideButton = styled.button`
display: flex;
justify-content: center;
width: 29px;
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

@media (max-width: 600px) {
    & svg {
        filter: invert(1);
        // width: 20px;
    }

    background-color: hsl(194.4, 83.9%, 51.2%);

    &:hover {
        background-color: hsl(194.4, 83.9%, 56.2%);
    }

    right: -29px;
}
`

const ToggleAsideButton = ({ setRight, children, right }) => (
    <StyledToggleAsideButton onClick={() => setRight(prevRight => prevRight === "0" ? right : "0")}>{children}</StyledToggleAsideButton>
)

export default ToggleAsideButton;