import React from "react";
import  { MyButton }  from './Button.styled';

interface ButtonProps {
    isActive?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children?: string;
    type?: string;
    style?: object;

  }
const Button: React.FC<ButtonProps> = ({ isActive = true, onClick, children}) => {
    return (
      <MyButton
        onClick={onClick}
        type="button"
        style={{
          backgroundColor: isActive ? "#f4c550" : "#EBD8FF",
        }}
        
      >
        {children}
      </MyButton>
    );
  };
  
  export default Button;
  export type { ButtonProps };