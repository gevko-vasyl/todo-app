import styled from '@emotion/styled';

export const TodoFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const TodoFormTitle = styled.h1`
  font-size: 40px;
  color: #90a2aa;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormInput = styled.input`
  padding-left: 30px;
  width: 500px;
  height: 60px;
  background-color: #232127;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 4px;
  &:focus {
    border: 1px solid white;
  }
`;
export const FormButton = styled.button`
  margin-top: 30px;
  width: 250px;
  height: 50px;
  background-color: #90a2aa;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    background-color: #dfe2de;
    border: 2px solid #232127;
  }
`;
