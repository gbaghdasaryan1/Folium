import { TopbarStyled } from './topbar.styled';
import { ReactComponent as CallIcon } from '../../../assets/icons/Call.svg';
import { ReactComponent as MailIcon } from '../../../assets/icons/Mail.svg';
import { LanguageDropdown } from '../dropdown/lenguage/language-dropdown';

export const Topbar = () => {
  return (
    <TopbarStyled className='flex-center'>
      <div className='container flex-between'>
        <div className='FL-topbar-contact flex'>
          <a href='tel:+37494609304' rel='noreferrer' className='flex-center'>
            <CallIcon className='FL-topbar-call-icon' />
            +374 94 60 93 04
          </a>
          <a href='mailto:support.ui-lib.com' rel='noreferrer' className='flex-center'>
            <MailIcon className='FL-topbar-mail-icon' />
            support.ui-lib.com
          </a>
        </div>

        <div className='FL-topbar-right flex-between'>
          <p>Theme FAQ’s</p>
          <p>Need Help?</p>

          <LanguageDropdown />
        </div>
      </div>
    </TopbarStyled>
  );
};
