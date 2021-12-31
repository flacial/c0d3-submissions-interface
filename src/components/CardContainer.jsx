import styled from "styled-components";

const CardContainer = styled.div`
position: relative;
box-shadow: 0px 0px 20px -2px rgba(15,69,89,0.47);
border-radius: 18px;

@media (max-width: 600px) {
    overflow: hidden;
}
`

export default CardContainer;