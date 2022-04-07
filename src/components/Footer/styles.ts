import styled from 'styled-components';

interface Footer {
  bgColor?: string;
  color?: string;
}

const Container = styled.footer<Footer>`
& {
  /* background-color: #333; */
  background-color: ${({ bgColor }) => bgColor || '#333'};
  width: 100%;
  height: 30px;
  color: ${({ color }) => color || 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  font-weight: 700;
}
img {
  margin-left: 10px;
}
@media (max-width: 450px) {
  p, span {
    font-size: 15px;
  }
}
`;

export default Container;
