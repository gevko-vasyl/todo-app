import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 600px;
  height: 300px;
  background: #121212;
  border-radius: 10px;
`;
export const ModalCloseButton = styled.div`
  align-self: flex-end;
  margin-right: 20px;
  width: 30px;
  height: 30px;
  background-color: #232127;
  cursor: pointer;
  border-radius: 50%;
  & svg {
    fill: #dde0dc;
  }
  &:hover {
    background-color: gray;
  }
`;
export const ModalInput = styled.input`
  margin-right: auto;
  margin-left: auto;
  width: 410px;
  height: 124px;
  padding: 20px;
  background-color: #232127;
  border: none;
  outline: none;
  border-radius: 4px;
  color: #fff;
  font-size: 24px;
  &:focus {
    border: 1px solid white;
  }
`;
export const ModalConfirmButton = styled.button`
  margin-right: auto;
  margin-left: auto;
  width: 200px;
  height: 40px;
  background: #0f6fff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 18px;
  &:hover {
    background-color: #dfe2de;
    border: 2px solid #232127;
  }
`;
