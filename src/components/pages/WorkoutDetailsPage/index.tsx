import React, { ReactNode } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { Workout } from "../WorkoutsPage/WorkoutsPageView";
import WorkoutDetailsPageView from "./WorkoutDetailsPageView";
import { GET_WORKOUTS } from "../../../graphql/queries";

interface Params {
  workoutId: string;
}

const ScreenWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Link to="/">Back</Link>
      {children}
    </div>
  );
};

const WorkoutDetailsPage = () => {
  const match: { params: Params } = useRouteMatch();
  const { loading, error, data } = useQuery(GET_WORKOUTS);

  const {
    params: { workoutId },
  } = match;

  if (loading)
    return (
      <ScreenWrapper>
        <p>Loading...</p>
      </ScreenWrapper>
    );
  if (error)
    return (
      <ScreenWrapper>
        <p>Error :(</p>
      </ScreenWrapper>
    );

  const workout: Workout = data.workouts.find(
    (workout: Workout) => workout.id === workoutId
  );
  if (!workout || !workoutId)
    return (
      <ScreenWrapper>
        <p>No workout found</p>
      </ScreenWrapper>
    );

  return <WorkoutDetailsPageView workout={workout} />;
};

export default WorkoutDetailsPage;
