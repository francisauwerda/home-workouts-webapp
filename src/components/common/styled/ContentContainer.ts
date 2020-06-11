import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

const ContentContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 50px;
  flex: 1;

  ${({ playing }: { playing: boolean }) =>
    playing && `background-color: white;`}

  @media (max-width: ${BREAKPOINT}) {
    padding-top: 0;
    margin: 20px;
  }
`;

export default ContentContainer;
