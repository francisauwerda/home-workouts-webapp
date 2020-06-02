import React from "react";

import * as SC from "./styled";
import ConfigureButton from "./ConfigureButton";
import { Exercise } from "../../types";

interface PreWorkoutDetailsProps {
  exercises: Exercise[];
  initialCountdownRemaining: number;
  configureCountdown: Function;
  initialExerciseTimeRemaining: number;
  configureExerciseTime: Function;
}

const PreWorkoutDetails = ({
  initialExerciseTimeRemaining,
  initialCountdownRemaining,
  configureCountdown,
  configureExerciseTime,
  exercises,
}: PreWorkoutDetailsProps) => {
  return (
    <SC.PreWorkoutDetailsWrapper>
      <SC.ExercisesListWrapper>
        <h2>Exercises</h2>
        <SC.ExercisesList>
          {exercises.map((exercise) => (
            <span key={exercise.id}>{exercise.title}</span>
          ))}
        </SC.ExercisesList>
      </SC.ExercisesListWrapper>
      <SC.PreSetupWrapper>
        <h2>Configuration</h2>
        <SC.ExercisesList>
          <ConfigureButton
            plusOrMinus="plus"
            configureFunction={configureExerciseTime}
            initialValue={initialExerciseTimeRemaining}
          />
          <ConfigureButton
            plusOrMinus="minus"
            configureFunction={configureExerciseTime}
            initialValue={initialExerciseTimeRemaining}
          />
          <div>{`${initialExerciseTimeRemaining} seconds per exercise`}</div>
          <ConfigureButton
            plusOrMinus="plus"
            configureFunction={configureCountdown}
            initialValue={initialCountdownRemaining}
          />
          <ConfigureButton
            plusOrMinus="minus"
            configureFunction={configureCountdown}
            initialValue={initialCountdownRemaining}
          />
          <div>{`${initialCountdownRemaining} seconds per rest`}</div>
        </SC.ExercisesList>
      </SC.PreSetupWrapper>
    </SC.PreWorkoutDetailsWrapper>
  );
};

export default PreWorkoutDetails;
