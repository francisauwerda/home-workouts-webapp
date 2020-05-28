import React from "react";
import * as SC from "./styled";
import { Workout } from "../../types";
import WorkoutCard from "./WorkoutCard";

interface WorkoutsPageViewProps {
  workouts: Workout[];
}

const WorkoutsPageView = ({ workouts }: WorkoutsPageViewProps) => {
  return (
    <SC.PageContainer>
      <SC.TitleContainer>
        <SC.Header>Choose your workout</SC.Header>
      </SC.TitleContainer>
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
