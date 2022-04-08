import React, { ButtonHTMLAttributes } from 'react';
import Container from './styles';

import iconSwap from '../../../../assets/icons/icon-swap-white.svg';
import iconEqual from '../../../../assets/icons/icon-equal-white.svg';
import iconReset from '../../../../assets/icons/icon-reset-white.svg';

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
      case 'convert': return <img src={iconSwap} alt="icon-pencil" />;
      case 'reset': return <img src={iconReset} alt="icon-person" />;
      case 'swap': return <img src={iconEqual} alt="icon-person" />;
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
