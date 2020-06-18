import React from "react";

import * as SC from "./styled";
import ConfigureButton from "./ConfigureButton";
import { Exercise } from "../../types";
import H5 from "../../common/styled/H5";

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
        <H5>Exercises</H5>
        <SC.ExercisesList>
          {exercises.map((exercise) => (
            <SC.ExerciseItem key={exercise.id}>
              {exercise.title}
            </SC.ExerciseItem>
          ))}
        </SC.ExercisesList>
      </SC.ExercisesListWrapper>
      <SC.ConfigWrapper>
        <H5>Configuration</H5>
        <SC.ConfigContent>
          <div>
            <div>Seconds per exercises</div>
            <SC.ConfigButtonsWrapper>
              <ConfigureButton
                plusOrMinus="minus"
                configureFunction={configureExerciseTime}
                initialValue={initialExerciseTimeRemaining}
              />
              <SC.ConfigUnit>{initialExerciseTimeRemaining}</SC.ConfigUnit>
              <ConfigureButton
                plusOrMinus="plus"
                configureFunction={configureExerciseTime}
                initialValue={initialExerciseTimeRemaining}
              />
            </SC.ConfigButtonsWrapper>
          </div>
          <div>
            <div>Seconds per rest</div>
            <SC.ConfigButtonsWrapper>
              <ConfigureButton
                plusOrMinus="minus"
                configureFunction={configureCountdown}
                initialValue={initialCountdownRemaining}
              />
              <SC.ConfigUnit>{initialCountdownRemaining}</SC.ConfigUnit>
              <ConfigureButton
                plusOrMinus="plus"
                configureFunction={configureCountdown}
                initialValue={initialCountdownRemaining}
              />
            </SC.ConfigButtonsWrapper>
          </div>
        </SC.ConfigContent>
      </SC.ConfigWrapper>
    </SC.PreWorkoutDetailsWrapper>
  );
};

export default PreWorkoutDetails;
