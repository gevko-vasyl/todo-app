import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { nanoid } from 'nanoid';
import { ITodo } from '../../types/ITodo';
import { addTodo } from '../../redux/slices/todoSlice';
import { TodoFormContainer, TodoFormTitle, Form, FormInput, FormButton } from './TodoForm.styles';

const initialState = {
  // userId: 13,
  id: '',
  title: '',
  completed: false,
};

export default function TodoForm() {
  const [form, setForm] = useState<ITodo>(initialState);
  const dispatch = useAppDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setForm({ ...form, title: title, id: nanoid() });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(form));
    setForm(initialState);
  };

  return (
    <TodoFormContainer>
      <TodoFormTitle>What you gonna do?</TodoFormTitle>
      <Form onSubmit={submitHandler}>
        <FormInput onChange={inputHandler} placeholder='Write a todo' value={form.title} />
        <FormButton type='submit'> Create</FormButton>
      </Form>
    </TodoFormContainer>
  );
}
