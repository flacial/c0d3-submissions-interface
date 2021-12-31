import { keyframes } from "styled-components"

const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(20px);
}

to {
  opacity: 1;
}
`

export default fadeIn;