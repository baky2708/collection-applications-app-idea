import React, { useState } from 'react';
import {
  Container,
  ConvertorContainer,
  InputContainer,
  FutureAd,
  Convertor,
} from './styles';

const Main = () => {
  const [selected, setSelected] = useState('Binary');

  const onHandleChange = ({ target }: any) => {
    setSelected(target.value);
  };
  const options = [
    'Binary',
    'Decimal',
    'Hexadecimal',
  ];

  return (
    <Container>
      <ConvertorContainer>
        <h1>Binary to Decimal Converter</h1>
        <Convertor>
          <InputContainer>
            <label htmlFor="bin">
              <p>From</p>
              <select onChange={onHandleChange}>
                {options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label htmlFor="bin">
              <p>To</p>
              <select>
                {options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </InputContainer>
          <label htmlFor="bin">
            <p>
              Enter&nbsp;
              <span>
                {selected}
              </span>
              &nbsp;number
            </p>
            <input />
          </label>
        </Convertor>
      </ConvertorContainer>
      <FutureAd>
        Future Ad
      </FutureAd>
    </Container>
  );
};

export default Main;
