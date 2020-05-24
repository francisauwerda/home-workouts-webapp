import styled from 'styled-components';

export const H3 = styled.h3`
  font-size: 48px;
  font-weight: 400;
`;

export const ExerciseWrapper = styled.div`
  display: flex;
  /* background-color: grey; */
  margin-top: 60px;
`;

export const ExerciseTitleWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExerciseTitle = styled(H3)`
`;

export const ExerciseImageContainer = styled.div`
  flex: 1;
  width: 150px;
`;

export const ExerciseImage = styled.img`
  max-width: 100%;
`;

export const TimerWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;
