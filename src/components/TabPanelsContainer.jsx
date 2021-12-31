import styled from "styled-components";
import fadeIn from "../keyframes/fadeIn";

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

export default TabPanelsContainer;