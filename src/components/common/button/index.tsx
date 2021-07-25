import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = (props) => (
  <StyledButton {...props} />
);
