import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../App';

export interface Exercise {
  id: string,
  title: string,
  imageUrl: string,
  order: number
}

export interface Workout {
  id: string,
  title: string,
  exercises: Exercise[]
}

interface WorkoutsPageViewProps {
  workouts: Workout[]
}

const WorkoutsPageView = ({ workouts }: WorkoutsPageViewProps) => {

  return (
    <div>
      <h3>Workouts</h3>

      {workouts.map((workout) => {
        return (
          <Link key={workout.id} to={`${Routes.WorkoutDetailsPage}/${workout.id}`}>
            <p>{workout.title}</p>
          </Link>
        )
      })}
    </div>
  )
};

export default WorkoutsPageView;
