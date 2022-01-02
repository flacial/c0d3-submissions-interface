import styled from "styled-components";

const Card = styled.div`
height: 100%;
width: 100%;
max-width: 384px;
max-height: 600px;
border-radius: 20px;
background: #003459;
position: relative;
z-index: 20;

@media (min-height: 550px) {
    height: 550px;
}
`;

export default Card;