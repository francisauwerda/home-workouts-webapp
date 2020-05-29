import React from "react";
import * as SC from "./styled";
import { Workout } from "../../types";
import WorkoutCard from "./WorkoutCard";
import { Header } from "../../common";

interface WorkoutsPageViewProps {
  workouts: Workout[];
}

const WorkoutsPageView = ({ workouts }: WorkoutsPageViewProps) => {
  return (
    <SC.PageContainer>
      <Header title="Choose your workout" />
      <SC.WorkoutsSectionContainer>
        <SC.WorkoutsGroupWrapper>
          <SC.WorkoutsGroupTitle>Full body</SC.WorkoutsGroupTitle>
          <SC.WorkoutsContainer>
            {workouts.map((workout) => {
              return <WorkoutCard key={workout.id} workout={workout} />;
            })}
          </SC.WorkoutsContainer>
        </SC.WorkoutsGroupWrapper>
      </SC.WorkoutsSectionContainer>
    </SC.PageContainer>
  );
};

export default WorkoutsPageView;
