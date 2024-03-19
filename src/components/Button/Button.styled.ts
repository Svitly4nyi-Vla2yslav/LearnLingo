import styled from 'styled-components';
import { ButtonProps } from './Button';

export const MyButton = styled.button<ButtonProps>`
display: flex;
justify-content: center;
align-items: center;

padding: 16px 32px;
border-radius: 12px;
border: none;

color: #121417;;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 1.55;
background-color: isActive ? "#f4c550" : "#EBD8FF"

transform: scale(1);
transition: transform 500ms cubic-bezier(0.39, 0.575, 0.565, 1);

@media screen and (min-width: 500px) {
  padding: 16px 88px;
}

  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: transform 500ms cubic-bezier(0.39, 0.575, 0.565, 1);
  }
`;