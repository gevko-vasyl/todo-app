import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodoList = createAsyncThunk('todo/fetchTodoList', async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/todos', {
    params: { _limit: 10 },
  });
  return result.data;
});
