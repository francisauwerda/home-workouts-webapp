import React from "react";

import * as SC from "./styled";
import { Exercise } from "../../types";
import { Timer } from "../../common";

const ExerciseComponent = ({
  exercise,
  countdownRemaining,
  timeRemaining,
  isFirstExercise,
}: {
  exercise: Exercise;
  countdownRemaining: number;
  timeRemaining: number;
  isFirstExercise: boolean;
}) => {
  return (
    <SC.ExerciseWrapper>
      <SC.ExerciseTitleWrapper>
        <SC.ExerciseTitle>{exercise.title}</SC.ExerciseTitle>
      </SC.ExerciseTitleWrapper>
      <SC.ExerciseImageContainer>
        <SC.ExerciseImage src={exercise.imageUrl} alt={exercise.title} />
      </SC.ExerciseImageContainer>
      <Timer
        timeRemaining={timeRemaining}
        countdownRemaining={countdownRemaining}
        isFirstExercise={isFirstExercise}
      />
    </SC.ExerciseWrapper>
  );
};

export default ExerciseComponent;
