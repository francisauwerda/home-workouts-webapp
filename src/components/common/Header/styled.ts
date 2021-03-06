import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 72px;
  background-color: #e71d36;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 40px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  @media (max-width: ${BREAKPOINT}) {
    padding: 0 20px;
  }
`;

export const LeftPart = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
`;

export const MiddlePart = styled.div`
  flex: 3;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 24px;

  @media (max-width: ${BREAKPOINT}) {
    flex: 4;
    font-size: 18px;
  }
`;

export const RightPart = styled.div`
  flex: 1;
`;
