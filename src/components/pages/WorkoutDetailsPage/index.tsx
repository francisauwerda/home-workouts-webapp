import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";
import { Workout } from '../WorkoutsPage/WorkoutsPageView';
import WorkoutDetailsPageView from './WorkoutDetailsPageView';
import { GET_WORKOUTS } from '../../../graphql/queries';

interface Params {
  workoutId: string
}


const WorkoutDetailsPage = () => {
  const match: { params: Params } = useRouteMatch();
  const { loading, error, data } = useQuery(GET_WORKOUTS);

  const { params: { workoutId } } = match;


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  const workout: Workout = data.workouts.find((workout: Workout) => workout.id === workoutId)
  if (!workout || !workoutId) return <p>No workout found</p>
  
  return (<WorkoutDetailsPageView workout={workout} />)
}

export default WorkoutDetailsPage;