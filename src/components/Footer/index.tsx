import React from 'react';
import Container from './styles';
import iconGithubWhite from '../../assets/icons/icon-github-white.svg';
import iconLinkedinWhite from '../../assets/icons/icon-linkedin-white.svg';
import iconGithub444 from '../../assets/icons/icon-github-444.svg';
import iconLinkedin444 from '../../assets/icons/icon-linkedin-444.svg';

interface FooterProps {
  bgColor?: string;
  color?: string;
  icons: string;
}

interface IconsObj {
  [key: string]: string,
}

const Footer: React.FC<FooterProps> = ({ bgColor, color, icons }) => {
  const gitHubIcons: IconsObj = {
    444: iconGithub444,
    white: iconGithubWhite,

  };
  const linkedinIcons: IconsObj = {
    444: iconLinkedin444,
    white: iconLinkedinWhite,
  };
  return (
    <Container bgColor={bgColor} color={color}>
      <p>
        Website created by
        <span> Flavio Baky Isaque</span>
      </p>
      <a
        href="https://github.com/baky2708"
        target="_blank"
        rel="noreferrer"
      >
        <img src={gitHubIcons[icons]} alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/flavio-baky-isaque/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinIcons[icons]} alt="github" />
      </a>
    </Container>
  );
};

export default Footer;
