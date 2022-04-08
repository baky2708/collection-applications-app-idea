import React, { ButtonHTMLAttributes } from 'react';
import Container from './styles';

import iconPencil from '../../../../assets/icons/icon-github-444.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  hover?: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  children, color, hover, icon,
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'convert': return <img src={iconPencil} alt="icon-pencil" />;
      // case 'reset': return <img src={iconPerson} alt="icon-person" />;
      // case 'swap': return <img src={iconPerson} alt="icon-person" />;
      default: return '';
    }
  };
  return (
    <Container icon={icon} color={color} hover={hover}>
      {getIcon()}
      {children}
    </Container>
  );
};

export default Button;
