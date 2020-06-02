import styled from "styled-components";
import { Link } from "react-router-dom";
import { H3 } from "../../common/styled";

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
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const ButtonWrapper = styled.button``;

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
