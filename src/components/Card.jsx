import styled from "styled-components";

const Card = styled.div`
height: 100%;
width: 100%;
max-width: 384px;
max-height: 494px;
border-radius: 20px;
background: #003459;
position: relative;
z-index: 20;

@media (max-height: 580px) {
    height: 413px;
}

@media (min-height: 600px) {
    height: 494px;
}
`;

export default Card;