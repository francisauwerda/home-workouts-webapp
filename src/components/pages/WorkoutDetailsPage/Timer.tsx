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
    text = "Countdown";
    time = countdownRemaining;
  } else if (timeRemaining > 0) {
    text = "Go go go!!!";
    time = timeRemaining;
  } else {
    text = "Finished 🏅";
    time = 0;
  }
  return (
    <SC.TimerWrapper>
      <p>{text}</p>
      <SC.H3>{time} seconds</SC.H3>
    </SC.TimerWrapper>
  );
};

export default Timer;
