import React, { InputHTMLAttributes } from 'react';
import { StyledInput } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
