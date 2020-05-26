import React from 'react';

import { Exercise } from '../WorkoutsPage/WorkoutsPageView';
import * as SC from './styled';

interface PreWorkoutDetailsProps {
  exercises: Exercise[],
  initialCountdownRemaining: number,
  initialExerciseTimeRemaining: number
}

const PreWorkoutDetails = ({
  initialExerciseTimeRemaining,
  initialCountdownRemaining,
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
        <div>{`${initialExerciseTimeRemaining} seconds per exercise`}</div>
        <div>{`${initialCountdownRemaining} seconds per rest`}</div>
      </SC.PreSetupWrapper>
    </SC.PreWorkoutDetailsWrapper>
  )
}

export default PreWorkoutDetails;
