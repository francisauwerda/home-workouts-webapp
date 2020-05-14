import React from 'react';

type Workout = {
  id: string,
  title: string,
}

interface WorkoutsPageViewProps {
  workouts: Workout[]
}

const WorkoutsPageView = ({ workouts }: WorkoutsPageViewProps) => {

  return (
    <div>
      <h3>Workouts</h3>
      {workouts.map((workout) => {
        return <p>{workout.title}</p>
      })}
    </div>
  )
};

export default WorkoutsPageView;
