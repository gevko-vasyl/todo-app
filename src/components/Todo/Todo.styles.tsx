import styled from '@emotion/styled';

export const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  height: 65px;
  margin-top: 10px;
  padding-right: 30px;
  padding-left: 30px;
  background-color: #232127;
  border-radius: 10px;

  & input:checked + span {
    text-decoration: line-through;
  }
  & svg {
    fill: #90a2aa;
  }
  & svg:hover {
    cursor: pointer;
    fill: #f5f5f5;
  }
`;

export const TodoCheckbox = styled.input`
  margin-right: 20px;
  width: 40px;
  height: 20px;
`;

export const TodoTitle = styled.span`
  color: #f5f5f5;
`;

export const TodoInputTitleContainer = styled.div`
  display: flex;

  & svg {
    margin-right: 20px;
    width: 2 rem;
    height: 2 rem;
    border-radius: 8 px;
  }
`;

export const TodoIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & svg {
    margin-right: 10px;
  }
`;
