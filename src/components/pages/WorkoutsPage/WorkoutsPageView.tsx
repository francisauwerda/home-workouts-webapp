import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../enums';
import { Header, PageContainer, WorkoutsContainer, TitleContainer } from './styled';

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

interface WorkoutsPageViewProps {
  workouts: Workout[]
}

const WorkoutsPageView = ({ workouts }: WorkoutsPageViewProps) => {

  return (
    <PageContainer>
      <TitleContainer>
        <Header>Choose your workout</Header>
      </TitleContainer>
      <WorkoutsContainer>
        {workouts.map((workout) => {
          return (
            <Link key={workout.id} to={`${Routes.WorkoutDetailsPage}/${workout.id}`}>
              <p>{workout.title}</p>
            </Link>
          )
        })}
      </WorkoutsContainer>
    </PageContainer>
  )
};

export default WorkoutsPageView;
