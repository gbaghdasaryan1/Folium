import { Categories } from '../category/components/categories';
import { Navigation } from '../navigation/components/navigation';
import { NavbarStyled } from './navbar.styled';

export const Navbar = () => {
  return (
    <NavbarStyled className='flex-center'>
      <div className='container flex-between'>
        <Categories />
        <Navigation />
      </div>
    </NavbarStyled>
  );
};
