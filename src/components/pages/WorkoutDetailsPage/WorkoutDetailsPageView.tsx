import React, { useState } from 'react';

import { Workout, Exercise } from '../WorkoutsPage/WorkoutsPageView';
import * as SC from './styled';
import config, { Environment } from '../../../config';
import { useInterval } from '../../hooks';

interface Props {
  workout: Workout
}

const DEV_MODE = config.environment === Environment.Development;
const DEV_IMAGE_URL = '/dips.jpg';

const Timer = () => {
  return (
    <SC.TimerWrapper>
      <SC.H3>35 seconds</SC.H3>
    </SC.TimerWrapper>
  )
}

const ExerciseComponent = ({ exercise }: { exercise: Exercise }) => {
  const imageUrl = DEV_MODE ? DEV_IMAGE_URL : exercise.imageUrl;

  return (
    <SC.ExerciseWrapper>
      <SC.ExerciseTitleWrapper>
        <SC.ExerciseTitle>
          {exercise.title}
        </SC.ExerciseTitle>
      </SC.ExerciseTitleWrapper>
      <SC.ExerciseImageContainer>
        <SC.ExerciseImage src={imageUrl} alt={exercise.title} />
      </SC.ExerciseImageContainer>
      <Timer />
    </SC.ExerciseWrapper>
  )
}

const WorkoutDetailsPageView = ({ workout }: Props) => {
  const initialCountdownRemaining = 3;
  const initialExerciseTimeRemaining = 3;
  const { title, exercises } = workout;

  const [currentExercise, setCurrentExercise] = useState(0);
  const isNextExercise = currentExercise < exercises.length - 1;
  const [isRunning, setIsRunning] = useState(false);
  const [countdownRemaining, setCountdownRemaining] = useState(initialCountdownRemaining);
  const [exerciseTimeRemaining, setExerciseTimeRemaining] = useState(initialExerciseTimeRemaining);

  useInterval(() => {
    if (countdownRemaining > 0) {
      setCountdownRemaining(countdownRemaining - 1);
    } else if (exerciseTimeRemaining > 0) {
      setExerciseTimeRemaining(exerciseTimeRemaining - 1);
    } else if (isNextExercise) {
      setCurrentExercise(currentExercise + 1);
      setCountdownRemaining(initialCountdownRemaining);
      setExerciseTimeRemaining(initialExerciseTimeRemaining);
    } else {
      setIsRunning(false);
    }
  }, isRunning ? 1000 : null)

  const toggleStartWorkout = () => {
    setIsRunning(!isRunning);
  }

  return (
    <div>
      <SC.H3>{`Exercises for ${title}`}</SC.H3>
      <ExerciseComponent exercise={exercises[currentExercise]} />
      <div>Is running: {`${isRunning}`}</div>
      <div>Countdown remaining: {countdownRemaining}</div>
      <div>Exercise time remaining: {exerciseTimeRemaining}</div>
      <button onClick={toggleStartWorkout}>{isRunning ? 'Stop' : 'Start'}</button>
    </div>
  )
}

export default WorkoutDetailsPageView;
