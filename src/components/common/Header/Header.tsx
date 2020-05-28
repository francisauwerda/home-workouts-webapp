import React, { ReactNode } from "react";

import * as SC from "./styled";

interface HeaderProps {
  title: string;
  leftPart?: ReactNode;
  rightPart?: ReactNode;
}

const Header = ({ title, leftPart, rightPart }: HeaderProps) => {
  return (
    <SC.HeaderWrapper>
      {<SC.LeftPart>{leftPart && leftPart}</SC.LeftPart>}
      <SC.MiddlePart>{title}</SC.MiddlePart>
      {<SC.LeftPart>{rightPart && rightPart}</SC.LeftPart>}
    </SC.HeaderWrapper>
  );
};

export default Header;
