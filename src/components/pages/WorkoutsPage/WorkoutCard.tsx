import React from "react";

import { Routes } from "../../enums";
import * as SC from "./styled";
import { Workout } from "../../types";

const WorkoutCard = ({ workout }: { workout: Workout }) => {
  return (
    <SC.WorkoutCardWrapper to={`${Routes.WorkoutDetailsPage}/${workout.id}`}>
      <SC.WorkoutCardInner>
        <SC.WorkoutTitle>{workout.title}</SC.WorkoutTitle>
        <SC.WorkoutSubtitle>
          {`${workout.exercises.length} exercises`}
        </SC.WorkoutSubtitle>
      </SC.WorkoutCardInner>
    </SC.WorkoutCardWrapper>
  );
};

export default WorkoutCard;
