import toast from 'react-hot-toast';
import { useAppDispatch } from '../../hooks/redux';
import { ITodo } from '../../types/ITodo';
import {
  deleteTodo,
  toggleCompleted,
  toggleModal,
  setChoosenTodoId,
} from '../../redux/slices/todoSlice';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import {
  TodoContainer,
  TodoCheckbox,
  TodoTitle,
  TodoIconsContainer,
  TodoInputTitleContainer,
} from './Todo.styles';

interface Props {
  todo: ITodo;
}

export default function Todo({ todo }: Props) {
  const dispatch = useAppDispatch();

  const editDispatchHandler = () => {
    dispatch(setChoosenTodoId(todo.id));
    dispatch(toggleModal());
  };

  const deleteTodoHandler = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo was succesfully removed from your list');
  };

  return (
    <TodoContainer>
      <TodoInputTitleContainer>
        <TodoCheckbox
          type='checkbox'
          onChange={() => dispatch(toggleCompleted(todo.id))}
          checked={todo.completed}
        />
        <TodoTitle>{todo.title}</TodoTitle>
      </TodoInputTitleContainer>

      <TodoIconsContainer>
        <FaEdit size='25' onClick={editDispatchHandler} />
        <FaTrashAlt size='25' onClick={deleteTodoHandler} />
      </TodoIconsContainer>
    </TodoContainer>
  );
}
