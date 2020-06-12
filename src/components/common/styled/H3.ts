import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

const H3 = styled.h3`
  font-size: 48px;
  font-weight: 400;

  @media (max-width: ${BREAKPOINT}) {
    font-size: 24px;
  }
`;

export default H3;
