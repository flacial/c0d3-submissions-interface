import styled from 'styled-components';

const predictColor = vertical => vertical ? "rgba(0, 103, 179, 0.2)" : "rgba(0, 103, 179, 0.1)";

const Line = styled.div`
display: ${({ vertical }) => vertical ? "inline" : "block"};
background-color: ${({ vertical }) => predictColor(vertical)};
padding: ${({vertical}) => vertical ? "0 1.5px" : "1.5px 0"}
`;

export default Line;