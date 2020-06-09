import styled from "styled-components";
import { Link } from "react-router-dom";
import { H3 } from "../../common/styled";
import { BREAKPOINT } from "../../constants";

export const ExerciseWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const ExerciseTitleWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExerciseTitle = styled(H3)``;

export const ExerciseImageContainer = styled.div`
  flex: 1;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExerciseImage = styled.img`
  max-width: 100%;
  max-height: 600px;
  border-radius: 4px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  background-color: red;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const ExercisesListWrapper = styled.div`
  flex: 1;
`;

export const PreSetupWrapper = styled.div`
  flex: 1;
`;

export const ExercisesList = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 10px;
  padding: 10px;
`;

export const PreWorkoutDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10px;

  margin-bottom: 60px;
  flex: 1;

  @media (max-width: ${BREAKPOINT}) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
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
