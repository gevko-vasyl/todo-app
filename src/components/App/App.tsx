import { Switch, Route } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { Toaster } from 'react-hot-toast';
import Menu from '../Menu/Menu';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import Modal from '../Modal/Modal';

import 'modern-normalize/modern-normalize.css';
import { Container, AppTitle } from './App.styles';

function App() {
  const isTitleShown = useAppSelector<boolean>(state => state.isTitleShown);
  const isModalShown = useAppSelector<boolean>(state => state.isModalOpen);
  return (
    <Container>
      <Menu />
      {isTitleShown && <AppTitle>Welcome to your Todo App! Click on menu to start.</AppTitle>}
      <Switch>
        <Route path='/createform'>
          <TodoForm />
        </Route>
        <Route path='/todos'>
          <TodoList />
        </Route>
      </Switch>
      {isModalShown && <Modal />}
      <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
    </Container>
  );
}

export default App;
