import styled from 'styled-components';

export const Container = styled.main`
& {
  /* background-color: red; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 22px;
  color: #00596D;
  font-weight: 800;
  align-self: center;
  margin: 10px 0;
}
`;

export const ThumbContainer = styled.ul`
& {
  background-color:blue;
  width: 900px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
}
`;
export const Thumb = styled.li`
  background-color:yellow;
  width: 194px;
  height: 194px;
`;
