import React from "react";

import * as SC from "./styled";

const Timer = ({
  countdownRemaining,
  timeRemaining,
  isFirstExercise,
}: {
  countdownRemaining: number;
  timeRemaining: number;
  isFirstExercise: boolean;
}) => {
  let text: string;
  let time: number;
  let emoji: string = "⏳";
  if (countdownRemaining > 0 && isFirstExercise) {
    text = " Get ready!";
    emoji = "⏳";
    time = countdownRemaining;
  } else if (countdownRemaining > 0) {
    text = "Rest ";
    emoji = "✌️";
    time = countdownRemaining;
  } else if (timeRemaining > 0) {
    text = "Work! ";
    emoji = "💪";
    time = timeRemaining;
  } else {
    text = "Finished 🏅";
    emoji = "🏅";
    time = 0;
  }
  return (
    <SC.TimerWrapper>
      <SC.SecondsWrapper>
        <span>{emoji}</span>
        <span>{text}</span>
      </SC.SecondsWrapper>
      <SC.SecondsWrapper>{time} s</SC.SecondsWrapper>
    </SC.TimerWrapper>
  );
};

export default Timer;
