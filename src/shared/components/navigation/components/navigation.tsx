import { NavLink } from 'react-router-dom';
import { navigationMock } from '../navigation.constants';
import { NavigationStyled } from './navigation.styled';

export const Navigation = () => {
  return (
    <NavigationStyled>
      <ul className='Fl-navigation-ul flex'>
        {navigationMock.map(({ id, path, title }) => {
          return (
            <li key={id} className='Fl-navigation-li'>
              <NavLink to={path}>{title}</NavLink>
            </li>
          );
        })}
      </ul>
    </NavigationStyled>
  );
};
