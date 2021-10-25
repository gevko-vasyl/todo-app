import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../hooks/redux';
import { toggleModal, updateTodos } from '../../redux/slices/todoSlice';
import { MdClose } from 'react-icons/md';
import {
  ModalOverlay,
  ModalForm,
  ModalCloseButton,
  ModalInput,
  ModalConfirmButton,
} from './Modal.styles';

const modalRoot = document.getElementById('modalRoot') as HTMLElement;

export default function Modal() {
  const [todoValue, setTodoValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTodoValue(value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateTodos(todoValue));
    dispatch(toggleModal());
    setTodoValue('');
    toast.success('You succesfully change your todo');
  };
  return createPortal(
    <ModalOverlay>
      <ModalForm onSubmit={submitHandler}>
        <ModalCloseButton onClick={() => dispatch(toggleModal())}>
          <MdClose size='30' />
        </ModalCloseButton>
        <ModalInput type='text' placeholder='Edit your todo' onChange={inputHandler} />
        <ModalConfirmButton type='submit'>Confirm changes</ModalConfirmButton>
      </ModalForm>
    </ModalOverlay>,
    modalRoot,
  );
}
