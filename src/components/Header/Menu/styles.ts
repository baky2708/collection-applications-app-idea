import styled from 'styled-components';

export const Container = styled.div`
  & {
    width: 40px;
    height: 35px;
    background-color: #555;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 18px;
    height: 20px;
  }
`;

export const a: string = 'a';
