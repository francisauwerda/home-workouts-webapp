import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';
import WorkoutsPageView from './WorkoutsPageView';

const WORKOUTS = gql`
  {
    workouts {
      id
      title
      exercises {
        id
        title
        imageUrl
        order
      }
    }
  }
`;

const WorkoutsPage = () => {
  const { loading, error, data } = useQuery(WORKOUTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (<WorkoutsPageView workouts={data.workouts} />)
}

export default WorkoutsPage;
