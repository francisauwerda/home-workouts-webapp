import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import WorkoutsPageView from './WorkoutsPageView';
import { GET_WORKOUTS } from '../../../graphql/queries';

// TODO: Set to 1 for production
const WORKOUT_MULTIPLIER = 1;

const WorkoutsPage = () => {
  const { loading, error, data } = useQuery(GET_WORKOUTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const workouts = [];
  for (const workout of data.workouts) {
    for (let i = 0; i < WORKOUT_MULTIPLIER; i++) {
      workouts.push({
        ...workout,
        id: `${workout.id}${i}`
      });
    }
  }

  return (<WorkoutsPageView workouts={workouts} />)
}

export default WorkoutsPage;
