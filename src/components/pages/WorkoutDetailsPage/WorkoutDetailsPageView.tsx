import React from 'react';
import { Workout, Exercise } from '../WorkoutsPage/WorkoutsPageView';
import * as SC from './styled';
import config, { Environment } from '../../../config';

interface Props {
  workout: Workout
}

const DEV_MODE = config.environment === Environment.Development;
const DEV_IMAGE_URL = '/dips.jpg';

const ExerciseComponent = ({ exercise }: { exercise: Exercise }) => {
  const imageUrl = DEV_MODE ? DEV_IMAGE_URL : exercise.imageUrl;

  return (
    <SC.ExerciseWrapper>
      <SC.ExerciseTitle>{exercise.title}</SC.ExerciseTitle>
      <SC.ExerciseImage>
        <img src={imageUrl} alt={exercise.title} />
      </SC.ExerciseImage>
    </SC.ExerciseWrapper>
  )
}

const WorkoutDetailsPageView = ({ workout }: Props) => {
  const { title, exercises } = workout;

  return (
    <div>
      <h3>{`Exercises for ${title}`}</h3>
      {exercises.map(exercise => {
        return <ExerciseComponent exercise={exercise} />
      })}
    </div>
  )
}

export default WorkoutDetailsPageView;
