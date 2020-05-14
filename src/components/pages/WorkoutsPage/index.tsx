import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import WorkoutsPageView from './WorkoutsPageView';
import { GET_WORKOUTS } from '../../../graphql/queries';

const WorkoutsPage = () => {
  const { loading, error, data } = useQuery(GET_WORKOUTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (<WorkoutsPageView workouts={data.workouts} />)
}

export default WorkoutsPage;
