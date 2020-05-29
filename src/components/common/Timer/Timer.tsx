import React from "react";

import * as SC from "./styled";

const Timer = ({
  countdownRemaining,
  timeRemaining,
}: {
  countdownRemaining: number;
  timeRemaining: number;
}) => {
  let text: string;
  let time: number;
  if (countdownRemaining > 0) {
    text = "Rest ✌️";
    time = countdownRemaining;
  } else if (timeRemaining > 0) {
    text = "Work! 💪";
    time = timeRemaining;
  } else {
    text = "Finished 🏅";
    time = 0;
  }
  return (
    <SC.TimerWrapper>
      <SC.SecondsWrapper>{text}</SC.SecondsWrapper>
      <SC.SecondsWrapper>{time} s</SC.SecondsWrapper>
    </SC.TimerWrapper>
  );
};

export default Timer;
