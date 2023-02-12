import { AdvertisementBannerStyled } from './advertisement-banner.styled';

export const AdvertisementPoster = () => {
  return (
    <AdvertisementBannerStyled className='flex-center'>
      <div className='FL-advertisementPoster container flex-center'>
        <div className='FL-advertisementPoster-details '>
          <h2>50% Off For </h2>
          <h2>Your First Shopping</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis</p>
          <p>lobortis consequat eu, quam etiam at quis ut convallis.</p>

          <button>Shop Now</button>
        </div>
        <img
          src='https://ion.r2net.com/images/HomePage/SpecialGalleriesBanner/N/Mobile/Vertical/DiamondStuds.jpg'
          alt='Jewelery'
          className='FL-advertisementPoster-image'
        />
      </div>
    </AdvertisementBannerStyled>
  );
};
