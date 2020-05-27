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
  const sum = plusOrMinus === 'plus' ? initialValue + 1 : initialValue - 1;
  const text = plusOrMinus === 'plus' ? '+' : '-';
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
