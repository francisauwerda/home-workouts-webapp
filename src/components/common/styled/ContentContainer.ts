import styled from "styled-components";

const ContentContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 130px;
  margin: 0 50px;
  flex: 1;

  ${({ playing }: { playing: boolean }) =>
    playing && `background-color: white;`}
`;

export default ContentContainer;
