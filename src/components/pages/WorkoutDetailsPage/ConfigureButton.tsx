import React from "react";
import { Button } from "../../common/Button";

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

  return <Button text={text} onClick={() => configureFunction(sum)} />;
};

export default ConfigureButton;
