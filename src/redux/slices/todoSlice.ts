import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTodoList } from '../operations/fetchTodos';
import { ITodo } from '../../types/ITodo';

export interface TodoAppState {
  items: ITodo[];
  isLoading: boolean;
  error: string;
  isTitleShown: boolean;
  isModalOpen: boolean;
  choosenTodoId: string | number;
}

const initialState: TodoAppState = {
  items: [],
  isLoading: false,
  error: '',
  isTitleShown: true,
  isModalOpen: false,
  choosenTodoId: '',
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.items = [...state.items, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    toggleCompleted: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
      );
    },
    hideTitle: state => {
      state.isTitleShown = false;
    },
    toggleModal: state => {
      state.isModalOpen = !state.isModalOpen;
    },
    setChoosenTodoId: (state, action: PayloadAction<string | number>) => {
      state.choosenTodoId = action.payload;
    },
    updateTodos: (state, action: PayloadAction<string>) => {
      state.items = state.items.map(todo =>
        todo.id === state.choosenTodoId ? { ...todo, title: action.payload } : todo,
      );
    },
  },
  extraReducers: {
    [fetchTodoList.fulfilled.type]: (state, action: PayloadAction<ITodo[]>) => {
      state.isLoading = false;
      state.error = '';
      state.items = [...action.payload, ...state.items];
    },
    [fetchTodoList.pending.type]: state => {
      state.isLoading = true;
    },
    [fetchTodoList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleCompleted,
  hideTitle,
  toggleModal,
  setChoosenTodoId,
  updateTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
