import styled from "styled-components";
import { Link } from "react-router-dom";
import { H3 } from "../../common/styled";
import { BREAKPOINT } from "../../constants";

export const ExerciseWrapper = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: ${BREAKPOINT}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ExerciseTitleWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExerciseTitle = styled(H3)``;

export const ExerciseImageContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExerciseImage = styled.img`
  max-width: 80%;
  max-height: 600px;
  border-radius: 4px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  background-color: #e71d36;
`;

export const ConfigButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ExercisesListWrapper = styled.div`
  overflow-y: scroll;
`;

export const ConfigWrapper = styled.div`
  @media (max-width: ${BREAKPOINT}) {
    padding-top: 10px;
  }
`;

export const ConfigContent = styled.div`
  margin: 10px;
`;

export const ConfigUnit = styled.div`
  padding: 0 20px;
`;

export const ExercisesList = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
`;

export const ExerciseItem = styled.span`
  font-size: 14px;
  font-weight: regular;
  letter-spacing: 0.25;
`;

export const PreWorkoutDetailsWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10px;

  @media (max-width: ${BREAKPOINT}) {
    grid-template-columns: auto;
    grid-template-rows: 50% 50%;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
`;

export const BackButtonWrapper = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    opacity: 0.5;
  }
`;

export const BackButtonImage = styled.img`
  width: 48px;
  height: 48px;
`;

export const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: 72px auto 60px;
  height: 100vh;
  max-height: 100%;
`;

export const PageHeaderWrapper = styled.div``;
export const PageContentWrapper = styled.div`
  overflow-y: scroll;
  display: flex;
`;
export const PageFooterWrapper = styled.div`
  overflow-y: scroll;
  display: flex;
`;
