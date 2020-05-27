import React, { ReactNode } from 'react';

import * as SC from './styled';

const Button = ({ children, onClick }: { children: ReactNode, onClick: any }) => {
  return (
    <SC.ButtonWrapper
      type="button"
      onClick={onClick}
    >
      {children}
    </SC.ButtonWrapper>);
}

interface ConfigureButtonProps {
  plusOrMinus: 'plus' | 'minus',
  configureFunction: Function,
  initialValue: number
}

const ConfigureButton = ({
  plusOrMinus,
  configureFunction,
  initialValue
}: ConfigureButtonProps) => {
  let sum: number;
  let text: string;

  if (plusOrMinus === 'plus') {
    sum = initialValue + 1;
    text = '+';
  } else {
    sum = initialValue === 0 ? 0 : initialValue - 1;
    text = '-'
  }

  return (
    <Button
      onClick={
        () => configureFunction(sum)
      }
    >
      {text}
    </Button>
  )
}

export default ConfigureButton;
