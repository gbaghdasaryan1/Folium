import { MiniCardStyled } from './mini-card.styled';

export const MiniCard = () => {
  return (
    <MiniCardStyled>
      <img
        src='https://ae01.alicdn.com/kf/Hfa68219905ee46238ebefec5c4ee66a0O/Nordic-viking-odin-amulet-Talisman-Pendant-necklace-with-viking-gift-bag.jpg_Q90.jpg_.webp'
        alt='Odin'
        className='FL-miniCard-image'
      />

      <p className='FL-miniCard-price flex'>
        <span className='FL-miniCard-real-price'>5000 AMD</span>
        <span className='FL-miniCard-dicount-price'>4000 AMD</span>
      </p>
    </MiniCardStyled>
  );
};
