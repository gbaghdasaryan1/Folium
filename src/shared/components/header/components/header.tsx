import { Logo } from '../../logo/logo';
import { HeaderStyled } from './header.styled';
import { ReactComponent as UserIcon } from '../../../../assets/icons/user.svg';
import { ReactComponent as BasketIcon } from '../../../../assets/icons/basket.svg';
import { Search } from '../../search/components/search';

export const Header = () => {
  return (
    <HeaderStyled className='flex flex-center'>
      <div className='container flex flex-between'>
        <div className='FL-header-search-block flex flex-between'>
          <Logo />
          <Search />

          <div className='FL-header-search-block-icons flex'>
            <span className='FL-header-search-block-icon flex-center'>
              <UserIcon />
            </span>
            <span className='FL-header-search-block-icon flex-center'>
              <span className='FL-header-basket-count flex-center'>55</span>
              <BasketIcon />
            </span>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};
