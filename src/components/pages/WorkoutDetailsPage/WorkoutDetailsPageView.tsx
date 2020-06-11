import React, { useState, useEffect } from "react";

import * as SC from "./styled";
import { useInterval } from "../../hooks";
import PreWorkoutDetails from "./PreWorkoutDetails";
import { Header } from "../../common";
import { Workout } from "../../types";
import ExerciseComponent from "./ExerciseComponent";
import { ContentContainer, PageContainer } from "../../common/styled";
import { Button } from "../../common/Button";

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      setPlaying(false);
    });
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

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
  const [playing, toggleBeep] = useAudio("/beep.mp3");

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
        if (countdownRemaining === 1) {
          (toggleBeep as () => void)();
        }
      } else if (exerciseTimeRemaining > 0) {
        if (exerciseTimeRemaining === 1 && isNextExercise) {
          (toggleBeep as () => void)();
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
      <SC.PageWrapper>
        <SC.PageHeaderWrapper>
          <Header
            title={title}
            leftPart={
              <SC.BackButtonWrapper to="/">
                <SC.BackButtonImage src="/back_button.png" alt="back-button" />
              </SC.BackButtonWrapper>
            }
          />
        </SC.PageHeaderWrapper>
        <SC.PageContentWrapper>
          <ContentContainer playing={playing}>
            <SC.ContentWrapper>
              {workoutStarted ? (
                <ExerciseComponent
                  exercise={exercises[currentExercise]}
                  countdownRemaining={countdownRemaining}
                  timeRemaining={exerciseTimeRemaining}
                  isFirstExercise={currentExercise === 0}
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
            </SC.ContentWrapper>
          </ContentContainer>
        </SC.PageContentWrapper>
        <SC.PageFooterWrapper>
          <SC.ButtonsWrapper>
            <Button
              text={isRunning ? "Pause" : "Start"}
              onClick={toggleStartWorkout}
            />
            <Button text="Stop" onClick={stopWorkout} />
          </SC.ButtonsWrapper>
        </SC.PageFooterWrapper>
      </SC.PageWrapper>
    </PageContainer>
  );
};

export default WorkoutDetailsPageView;
