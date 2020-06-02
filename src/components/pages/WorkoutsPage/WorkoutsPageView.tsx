import React from "react";
import * as SC from "./styled";
import { Workout } from "../../types";
import WorkoutCard from "./WorkoutCard";
import { Header } from "../../common";
import { ContentContainer, PageContainer } from "../../common/styled";

interface WorkoutsPageViewProps {
  workouts: Workout[];
}

const WorkoutsPageView = ({ workouts }: WorkoutsPageViewProps) => {
  return (
    <PageContainer>
      <Header title="Choose your workout" />
      <ContentContainer>
        <SC.WorkoutsGroupTitle>Full body</SC.WorkoutsGroupTitle>
        <SC.WorkoutsContainer>
          {workouts.map((workout) => {
            return <WorkoutCard key={workout.id} workout={workout} />;
          })}
        </SC.WorkoutsContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default WorkoutsPageView;
