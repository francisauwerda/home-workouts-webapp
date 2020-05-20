import React from 'react';
import { Routes } from '../../enums';
import * as SC from './styled';

export interface Exercise {
  id: string,
  title: string,
  imageUrl: string,
  order: number
}

export interface Workout {
  id: string,
  title: string,
  exercises: Exercise[]
}

const WorkoutCard = ({ workout }: { workout: Workout }) => {
  return (
    <SC.WorkoutCardWrapper to={`${Routes.WorkoutDetailsPage}/${workout.id}`}>
      <SC.WorkoutCardInner>
        <SC.WorkoutTitle>
          {workout.title}
        </SC.WorkoutTitle>
        <SC.WorkoutSubtitle>
          {`${workout.exercises.length} exercises`}
        </SC.WorkoutSubtitle>
      </SC.WorkoutCardInner>
    </SC.WorkoutCardWrapper>
  )
}

interface WorkoutsPageViewProps {
  workouts: Workout[]
}

const WorkoutsPageView = ({ workouts }: WorkoutsPageViewProps) => {

  return (
    <SC.PageContainer>
      <SC.TitleContainer>
        <SC.Header>Choose your workout</SC.Header>
      </SC.TitleContainer>
      <SC.WorkoutsSectionContainer>
        <SC.WorkoutsGroupWrapper>
          <SC.WorkoutsGroupTitle>
            Full body
          </SC.WorkoutsGroupTitle>
          <SC.WorkoutsContainer>
            {workouts.map((workout) => {
              return (
                <WorkoutCard key={workout.id} workout={workout} />
              )
            })}
          </SC.WorkoutsContainer>
        </SC.WorkoutsGroupWrapper>
      </SC.WorkoutsSectionContainer>
    </SC.PageContainer>
  )
};

export default WorkoutsPageView;
