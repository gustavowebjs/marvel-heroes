import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC = (props: ButtonProps) => (
  <StyledButton {...props} />
);
