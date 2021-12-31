import { keyframes } from "styled-components"

const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(20px);
}

to {
  opactiy: 1;
}
`

export default fadeIn;