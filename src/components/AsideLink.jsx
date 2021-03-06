import styled from "styled-components";

const AsideLink = styled.div`
width: 36px;
height: 35.58px;
border-radius: 6px;
background: hsl(194.4, 83.9%, 51.2%);
display: grid;
place-items: center;
cursor: pointer;

& svg {
  width: 21px;
  height: auto;
}

& a {
  text-decoration: none;
}

& span {
  color: #135b72;
  font-size: 10.5px;
  font-weight: 600;
  line-height: 0;
}
`

export default AsideLink;