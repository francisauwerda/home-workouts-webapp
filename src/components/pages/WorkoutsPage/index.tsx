import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import WorkoutsPageView from './WorkoutsPageView';
import { GET_WORKOUTS } from '../../../graphql/queries';

// TODO: Set to 1 for production
const WORKOUT_MULTIPLIER = 10;

const WorkoutsPage = () => {
  const { loading, error, data } = useQuery(GET_WORKOUTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const workouts = [];
  for (const workout of data.workouts) {
    for (let i = 0; i < WORKOUT_MULTIPLIER; i++) {
      workouts.push({
        ...workout,
        // @ts-ignore
        id: WORKOUT_MULTIPLIER === 1 ? `${workout.id}` : `${workout.id}${i === 0 ? '' : i}`
      });
    }
  }

  return (<WorkoutsPageView workouts={workouts} />)
}

export default WorkoutsPage;
