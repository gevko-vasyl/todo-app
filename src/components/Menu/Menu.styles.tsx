import styled from '@emotion/styled';

export const BurgerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 60px;
  height: 60px;
  top: 15%;
  left: 7%;
  border-radius: 50%;
  background-color: #232127;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: all;
  & svg {
    fill: #dde0dc;
  }
  &:hover {
    background-color: gray;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  list-style: none;
  margin-top: 30vh;
  width: 15%;
  height: 30%;
  left: 2%;
  border-radius: 13px;
  background-color: #232127;
  & a {
    text-decoration: none;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 60px;
  font-size: 25px;
  color: #dde0dc;
  border-radius: 10px;
  transition: 0.3s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: all;
  &:hover {
    background-color: #90a2aa;
  }
  & svg {
    margin-right: 10px;
  }
`;
