import React from "react";
import * as SC from "./styled";

const Button = ({ text, onClick }: { text: string; onClick: any }) => {
  return (
    <SC.ButtonWrapper type="button" onClick={onClick}>
      {text}
    </SC.ButtonWrapper>
  );
};

export default Button;
