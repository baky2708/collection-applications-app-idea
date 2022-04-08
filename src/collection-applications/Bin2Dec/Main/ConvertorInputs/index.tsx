import React, { useState } from 'react';
import {
  ConvertorContainer,
  InputContainer,
  Convertor,
  ContainerButtons,
} from './styles';
import Button from '../Button';

const ConvertorInputs = () => {
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
        <label htmlFor="bin">
          <p>
            Result
          </p>
          <input />
        </label>
        <ContainerButtons>
          <Button color="#28a745" icon="convert">
            Convert
          </Button>
          <Button color="#6c757d" icon="reset">
            Reset
          </Button>
          <Button color="#6c757d" icon="swap">
            Swap
          </Button>
        </ContainerButtons>
      </Convertor>
    </ConvertorContainer>
  );
};

export default ConvertorInputs;
