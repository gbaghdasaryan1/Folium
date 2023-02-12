import { NavLink } from 'react-router-dom';
import { FooterStyled } from './footer.styled';

export const Footer = () => {
  return (
    <FooterStyled className='flex-center'>
      <div className='container flex justify-between FL-footer-wrapper'>
        <div className='FL-footer-description'>
          <h2 className='FL-footer-logo'>Folium</h2>
          <p className='FL-footer-description-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis consequatur illum
            consectetur? Ipsa, debitis? Veritatis perspiciatis accusamus sed illum dignissimos, quam
            distinctio.
          </p>
          <div></div>
        </div>
        <ul className='FL-footer-ul flex flex-column'>
          <p className='FL-footer-ul-title'>About Us</p>
          <NavLink to='#'>Careers</NavLink>
          <NavLink to='#'>Our Stores</NavLink>
          <NavLink to='#'>Our Cares</NavLink>
          <NavLink to='#'>Terms & Conditions</NavLink>
          <NavLink to='#'>Privacy Policy</NavLink>
        </ul>
        <ul className='FL-footer-ul flex flex-column'>
          <p className='FL-footer-ul-title'>Customer Care</p>
          <NavLink to='#'>Help Center</NavLink>
          <NavLink to='#'>How to Buy</NavLink>
          <NavLink to='#'>Track Your Order</NavLink>
          <NavLink to='#'>Corporate & Bulk Purchasing</NavLink>
          <NavLink to='#'>Returns & Refunds</NavLink>
        </ul>
        <ul className='FL-footer-ul flex flex-column'>
          <p className='FL-footer-ul-title'>Contact Us</p>
          <NavLink to='#'>Corner view Subudbazar</NavLink>
          <NavLink to='#'>Sylhet, Bangladesh.</NavLink>
          <NavLink to='#'>Email: uilib@gmail.com</NavLink>
          <NavLink to='#'>Phone: +880 1123 456 780</NavLink>

          <div className='FL-footer-ul-social-links'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </ul>
      </div>
    </FooterStyled>
  );
};
