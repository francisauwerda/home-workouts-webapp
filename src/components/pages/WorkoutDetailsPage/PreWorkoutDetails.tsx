import React from 'react';

import { Exercise } from '../WorkoutsPage/WorkoutsPageView';
import * as SC from './styled';
import ConfigureButton from './ConfigureButton';

interface PreWorkoutDetailsProps {
  exercises: Exercise[],
  initialCountdownRemaining: number,
  configureCountdown: Function,
  initialExerciseTimeRemaining: number,
  configureExerciseTime: Function
}

const PreWorkoutDetails = ({
  initialExerciseTimeRemaining,
  initialCountdownRemaining,
  configureCountdown,
  configureExerciseTime,
  exercises
}: PreWorkoutDetailsProps) => {
  return (
    <SC.PreWorkoutDetailsWrapper>
      <SC.ExercisesListWrapper>
        <div>Exercises</div>
        <SC.ExercisesList>
          {exercises.map(exercise => <span key={exercise.id}>{exercise.title}</span>)}
        </SC.ExercisesList>
      </SC.ExercisesListWrapper>
      <SC.PreSetupWrapper>
        <ConfigureButton
          plusOrMinus='plus'
          configureFunction={configureExerciseTime}
          initialValue={initialExerciseTimeRemaining}
        />
        <ConfigureButton
          plusOrMinus='minus'
          configureFunction={configureExerciseTime}
          initialValue={initialExerciseTimeRemaining}
        />
        <div>{`${initialExerciseTimeRemaining} seconds per exercise`}</div>
        <ConfigureButton
          plusOrMinus='plus'
          configureFunction={configureCountdown}
          initialValue={initialCountdownRemaining}
        />
        <ConfigureButton
          plusOrMinus='minus'
          configureFunction={configureCountdown}
          initialValue={initialCountdownRemaining}
        />
        <div>{`${initialCountdownRemaining} seconds per rest`}</div>
      </SC.PreSetupWrapper>
    </SC.PreWorkoutDetailsWrapper>
  )
}

export default PreWorkoutDetails;
