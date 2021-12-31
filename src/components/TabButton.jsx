import React from "react";
import styled from "styled-components";

const StyledTabButton = styled.button`
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
  ${({ focus }) => focus === true && `
  background: linear-gradient(135deg,#20d4b4,#0083E1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
  color: hsl(195.7, 100%, 35.3%);
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

const TabButton = ({ children, setCurrentTab, focus, left, right, tabindex, currentTab }) => {
    const handleTabClick = (tabindex) => currentTab !== tabindex && setCurrentTab(tabindex);

    return (
        <StyledTabButton right={right} left={left} focus={focus} onClick={() => handleTabClick(tabindex)}>
            <p>{children}</p>
        </StyledTabButton>
    );
};

export default TabButton;