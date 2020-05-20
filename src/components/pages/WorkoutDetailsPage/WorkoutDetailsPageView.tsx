import React from 'react';
import { Workout } from '../WorkoutsPage/WorkoutsPageView';

interface Props {
  workout: Workout
}

const DEV_MODE = true;
const DEV_IMAGE_URL = '/dips.jpg';

const WorkoutDetailsPageView = ({ workout }: Props) => {
  const { title, exercises } = workout;

  return (
    <div>
      <h3>{`Exercises for ${title}`}</h3>
      {exercises.map(exercise => {
        const imageUrl = DEV_MODE ? DEV_IMAGE_URL : exercise.imageUrl;

        return <div key={exercise.id}>
          <p>{exercise.title}</p>
          <img src={imageUrl} alt={exercise.title} />
        </div>
      })}
    </div>
  )
}

export default WorkoutDetailsPageView;
