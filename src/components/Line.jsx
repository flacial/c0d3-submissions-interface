import styled from 'styled-components';

const predictColor = vertical => vertical ? "rgba(0, 103, 179, 0.2)" : "rgba(0, 103, 179, 0.1)";

const Line = styled.div`
display: ${({ vertical }) => vertical ? "inline" : "block"};
border: solid ${({ borderWidth }) => borderWidth ? borderWidth : "1.5px"} ${({ vertical }) => predictColor(vertical)};
background-color: ${({ vertical }) => predictColor(vertical)};
`;

export default Line;