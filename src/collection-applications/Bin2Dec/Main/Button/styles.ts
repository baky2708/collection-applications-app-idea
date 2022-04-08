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
  width: 96px;
  height: 41px;
  padding: 6px 12px;
  border: 0;
  border-radius: 4px;
  color: white;
}

&:hover {
  opacity: 1;
}
`;

export default Container;
