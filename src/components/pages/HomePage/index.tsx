import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';

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

type Workout = {
  id: string,
  title: string,
}

const HomePage = () => {
  const { loading, error, data } = useQuery(WORKOUTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return data.workouts.map((workout: Workout) => {
    return <p>{workout.title}</p>
  })
}

export default HomePage;
