import styled from 'styled-components';

interface ButtonProps {
  color?: string;
  hover?: string;
  icon?: string;
}

const Container = styled.button<ButtonProps>`
& {
  background-color: ${({ color }) => color || 'black'};
  opacity: 0.8;
  width: auto;
  height: 41px;
  padding: 6px 16px;
  border: 0;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  margin-top: 10px;
  max-width: 100px;
  cursor: pointer;
}

img {
  margin-right: 4px;
}

&:hover {
  opacity: 1;
}

  @media (max-width: 410px) {
    max-width: 200px;
    width: 100%;
  }

`;

export default Container;
