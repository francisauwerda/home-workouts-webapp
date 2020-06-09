import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

const ContentContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 130px;
  margin: 0 50px;
  flex: 1;

  ${({ playing }: { playing: boolean }) =>
    playing && `background-color: white;`}

  @media (max-width: ${BREAKPOINT}) {
    padding-top: 80px;
  }
`;

export default ContentContainer;
