import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 60px 0;
`;

export const WorkoutsGroupTitle = styled.h5`
  font-size: 24px;
  font-weight: 400;
  padding-bottom: 10px;
`;

export const WorkoutsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const WorkoutCardWrapper = styled(Link)`
  width: 230px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-color: white;
  margin-right: 8px;
  margin-bottom: 8px;

  border: 1px solid black;
  border-radius: 4px;

  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: black;
`;

export const WorkoutCardInner = styled.div`
  padding: 8px;
`;

export const WorkoutTitle = styled.div``;

export const WorkoutSubtitle = styled.div``;
