import React from "react";

import * as SC from "./styled";

interface ConfigureButtonProps {
  plusOrMinus: "plus" | "minus";
  configureFunction: Function;
  initialValue: number;
}

const ConfigureButton = ({
  plusOrMinus,
  configureFunction,
  initialValue,
}: ConfigureButtonProps) => {
  let sum: number;
  let text: string;
  let step = 5;

  if (plusOrMinus === "plus") {
    sum = initialValue + step;
    text = "+";
  } else {
    sum = initialValue === 0 ? 0 : initialValue - step;
    text = "-";
  }

  return (
    <button type="button" onClick={() => configureFunction(sum)}>
      {text}
    </button>
  );
};

export default ConfigureButton;
