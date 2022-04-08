import styled from 'styled-components';

export const ConvertorContainer = styled.div`
  padding: 10px;
`;

export const InputContainer = styled.div`
& {
  width: 468px;
  display: flex;
  /* background-color: red; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 530px) {
  & {
    flex-direction: column;
    /* width: auto; */
    width: 100%;
    padding: 0 20px;
  }
}
`;

export const Convertor = styled.div`
& {
  background-color: #F0EEDC;
  width: 500px;
  height: 500px;
  border-radius: 10px;
  border: 1px solid #ced4da;
  padding-top: 15px;
  padding: 5px;
}

label {
  margin-right: 20px;
  /* background-color: blue; */
  width: 100%;
}

p {
  font-size: 18px;
  height: 20px;
  margin: 5px 0;
  display: block;
  color: #212529;
  margin-left: 4px;
  /* background-color: yellow; */
}

select, input {
  padding: 6px 12px;
  font-size: 20px;
  color: #495057;
  border: 1px solid #ced4da;
  background-color: white;
  border-radius: 6px;
  width: 100%;
  margin-bottom: 10px;
}

span {
  font-weight: 700;
}

@media (max-width: 530px) {
  & {
    /* margin: 10px; */
    width: 100%;
  }
}
`;
