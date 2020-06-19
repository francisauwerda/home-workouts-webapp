import React from "react";
import * as SC from "./styled";
import {
  PageWrapper,
  PageHeaderWrapper,
  PageContentWrapper,
  PageFooterWrapper,
} from "../WorkoutDetailsPage/styled";
import { Workout } from "../../types";
import WorkoutCard from "./WorkoutCard";
import { Header } from "../../common";
import { ContentContainer, PageContainer } from "../../common/styled";
import H5 from "../../common/styled/H5";

interface WorkoutsPageViewProps {
  workouts: Workout[];
}

const WorkoutsPageView = ({ workouts }: WorkoutsPageViewProps) => {
  return (
    <PageContainer>
      <PageWrapper>
        <PageHeaderWrapper>
          <Header title="Choose your workout" />
        </PageHeaderWrapper>
        <PageContentWrapper>
          <ContentContainer>
            <H5>Workouts</H5>
            <SC.WorkoutsContainer>
              {workouts.map((workout) => {
                return <WorkoutCard key={workout.id} workout={workout} />;
              })}
            </SC.WorkoutsContainer>
          </ContentContainer>
        </PageContentWrapper>
        <PageFooterWrapper></PageFooterWrapper>
      </PageWrapper>
    </PageContainer>
  );
};

export default WorkoutsPageView;
