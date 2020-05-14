import React from 'react';
import { Workout } from '../WorkoutsPage/WorkoutsPageView';

interface Props {
  workout: Workout
}

const WorkoutDetailsPageView = ({ workout }: Props) => {
  const { title, exercises } = workout;

  return (
    <div>
      <h3>{`Exercises for ${title}`}</h3>
      {exercises.map(exercise => {
        return <div key={exercise.id}>
          <p>{exercise.title}</p>
          <img src={exercise.imageUrl} alt={exercise.title} />
        </div>
      })}
    </div>
  )
}

export default WorkoutDetailsPageView;
