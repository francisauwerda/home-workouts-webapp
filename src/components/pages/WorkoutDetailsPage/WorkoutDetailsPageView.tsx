import React, { useState } from "react";

import * as SC from "./styled";
import { useInterval } from "../../hooks";
import PreWorkoutDetails from "./PreWorkoutDetails";
import { Header } from "../../common";
import { Workout } from "../../types";
import ExerciseComponent from "./ExerciseComponent";
import { ContentContainer, PageContainer } from "../../common/styled";

const WorkoutDetailsPageView = ({ workout }: { workout: Workout }) => {
  const { title, exercises } = workout;

  const initialTimesForBoth = 10;
  const [currentExercise, setCurrentExercise] = useState(0);
  const isNextExercise = currentExercise < exercises.length - 1;
  const [isRunning, setIsRunning] = useState(false);
  const [initialCountdownRemaining, setInitialCountdownRemaining] = useState(
    initialTimesForBoth
  );
  const [
    initialExerciseTimeRemaining,
    setInitialExerciseTimeRemaining,
  ] = useState(initialTimesForBoth);
  const [countdownRemaining, setCountdownRemaining] = useState(
    initialCountdownRemaining
  );
  const [exerciseTimeRemaining, setExerciseTimeRemaining] = useState(
    initialExerciseTimeRemaining
  );

  const configureCountdown = (countdown: number) => {
    setInitialCountdownRemaining(countdown);
    setCountdownRemaining(countdown);
  };

  const configureExerciseTime = (exerciseTime: number) => {
    setInitialExerciseTimeRemaining(exerciseTime);
    setExerciseTimeRemaining(exerciseTime);
  };

  const workoutStarted =
    isRunning ||
    countdownRemaining !== initialCountdownRemaining ||
    exerciseTimeRemaining !== initialExerciseTimeRemaining;

  useInterval(
    () => {
      if (countdownRemaining > 0) {
        setCountdownRemaining(countdownRemaining - 1);
      } else if (exerciseTimeRemaining > 0) {
        if (exerciseTimeRemaining === 1 && isNextExercise) {
          setCurrentExercise(currentExercise + 1);
          setCountdownRemaining(initialCountdownRemaining);
          setExerciseTimeRemaining(initialExerciseTimeRemaining);
        } else {
          setExerciseTimeRemaining(exerciseTimeRemaining - 1);
        }
      } else if (isNextExercise) {
        setCurrentExercise(currentExercise + 1);
        setCountdownRemaining(initialCountdownRemaining);
        setExerciseTimeRemaining(initialExerciseTimeRemaining);
      } else {
        setIsRunning(false);
      }
    },
    isRunning ? 1000 : null
  );

  const toggleStartWorkout = () => {
    setIsRunning(!isRunning);
  };

  const stopWorkout = () => {
    setIsRunning(false);
    setCurrentExercise(0);
    setCountdownRemaining(initialCountdownRemaining);
    setExerciseTimeRemaining(initialExerciseTimeRemaining);
  };

  return (
    <PageContainer>
      <Header
        title={title}
        leftPart={
          <SC.BackButtonWrapper to="/">
            <SC.BackButtonImage src="/back_button.png" alt="back-button" />
          </SC.BackButtonWrapper>
        }
      />

      <ContentContainer>
        {workoutStarted ? (
          <ExerciseComponent
            exercise={exercises[currentExercise]}
            countdownRemaining={countdownRemaining}
            timeRemaining={exerciseTimeRemaining}
          />
        ) : (
          <PreWorkoutDetails
            initialCountdownRemaining={initialCountdownRemaining}
            configureCountdown={configureCountdown}
            initialExerciseTimeRemaining={initialExerciseTimeRemaining}
            configureExerciseTime={configureExerciseTime}
            exercises={exercises}
          />
        )}

        <div>Is running: {`${isRunning}`}</div>
        <div>Countdown remaining: {countdownRemaining}</div>
        <div>Exercise time remaining: {exerciseTimeRemaining}</div>
        <div>Workout started: {`${workoutStarted}`}</div>
        <SC.ButtonsWrapper>
          <button onClick={toggleStartWorkout}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button onClick={stopWorkout}>Stop</button>
        </SC.ButtonsWrapper>
      </ContentContainer>
    </PageContainer>
  );
};

export default WorkoutDetailsPageView;
