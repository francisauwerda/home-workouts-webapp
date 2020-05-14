import { gql } from 'apollo-boost';

const GET_WORKOUTS = gql`
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

export default GET_WORKOUTS;
