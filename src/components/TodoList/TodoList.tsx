import { useEffect } from 'react';
import { ITodo } from '../../types/ITodo';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { fetchTodoList } from '../../redux/operations/fetchTodos';
import Todo from '../Todo/Todo';
import { TodoListContainer, TodoListTitle } from './TodoList.styles';

export default function TodoList() {
  const todos = useAppSelector<ITodo[]>(state => state.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (todos.length) {
      return;
    }
    dispatch(fetchTodoList());
  }, [dispatch, todos.length]);

  return (
    <TodoListContainer>
      <TodoListTitle>My Todo List</TodoListTitle>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </TodoListContainer>
  );
}
