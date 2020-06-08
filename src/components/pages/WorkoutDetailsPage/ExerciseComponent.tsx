import React from "react";

import * as SC from "./styled";
import config, { Environment } from "../../../config";
import { Exercise } from "../../types";
import { Timer } from "../../common";

const DEV_MODE = config.environment === Environment.Development;
const DEV_IMAGE_URL = "/dips.jpg";

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
  const imageUrl = DEV_MODE ? DEV_IMAGE_URL : exercise.imageUrl;

  return (
    <SC.ExerciseWrapper>
      <SC.ExerciseTitleWrapper>
        <SC.ExerciseTitle>{exercise.title}</SC.ExerciseTitle>
      </SC.ExerciseTitleWrapper>
      <SC.ExerciseImageContainer>
        <SC.ExerciseImage src={imageUrl} alt={exercise.title} />
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
