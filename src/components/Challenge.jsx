import styled from "styled-components"

export const Challenge = styled.div`
 h3 {
   color: #FFFFFF;
   font-weight: 500;
  //  white-space: nowrap;
  //  overflow: hidden;
  //  text-overflow: ellipsis;
 }

 p {
  color: #007EA7;
  font-weight: 500;
 }
`

export const ChallengeNameAndIcon = styled.div`
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