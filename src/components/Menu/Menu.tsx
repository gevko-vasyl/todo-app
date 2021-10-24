import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { hideTitle } from '../../redux/slices/todoSlice';
import { MenuContainer, Text, BurgerContainer } from './Menu.styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsListTask } from 'react-icons/bs';
import { MdCreate } from 'react-icons/md';

export default function Menu() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const dispatch = useAppDispatch();

  const menuHandler = () => {
    setIsMenuShown(!isMenuShown);
    dispatch(hideTitle());
  };

  return (
    <div>
      <BurgerContainer onClick={menuHandler}>
        <GiHamburgerMenu size='35' />
      </BurgerContainer>

      {isMenuShown && (
        <MenuContainer>
          <Link to='/createform'>
            <Text>
              <MdCreate />
              Create Todo
            </Text>
          </Link>

          <Link to='/todos'>
            <Text>
              <BsListTask />
              Todo list
            </Text>
          </Link>
        </MenuContainer>
      )}
    </div>
  );
}
