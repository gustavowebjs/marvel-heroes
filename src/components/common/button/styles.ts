import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const StyledButton = styled.button<ButtonProps>`
  height: 50px;
  font-size: 18px;
  border-radius: 8px;
  font-weight: 500;
  background: #ce1212;
  color: #fff;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: filter 0.2;
  border: 0;
  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
`;
