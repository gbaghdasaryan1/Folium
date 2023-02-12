import { ProductLabelBackgroundType, ProductLabelTextType } from '../../labels/labels.type';
import { ProductLabel } from '../../labels/product-labels/product-label';
import { BuyNowBtnStyled, ProductCardImageStyled, ProductCardStyled } from './product-card.styled';
import { ReactComponent as HeartIcon } from '../../../../assets/icons/heart.svg';

export const ProductCard = () => {
  return (
    <ProductCardStyled>
      <ProductLabel
        text='50% off'
        textColor={ProductLabelTextType.DISCOUTN}
        background={ProductLabelBackgroundType.DISCOUTN}
      />
      <div className='FL-product-card-img-wrapper'>
        <ProductCardImageStyled
          src='https://www.danielwellington.com/product-images/DW00400020_Classic_R-BHFDjG03.png'
          alt='ring'
        />
      </div>

      <div className='FL-product-card-details'>
        <p className='FL-product-card-name flex-between'>
          Product Name <HeartIcon />
        </p>
        <p className='FL-product-card-price'>
          <span className='FL-product-card-discount-price'>14900 AMD</span>
          <span className='FL-product-card-real-price'>16000 AMD</span>
          {/* <span className='FL-product-card-static-price'>16000 AMD</span> */}
        </p>

        <BuyNowBtnStyled>Buy now</BuyNowBtnStyled>
      </div>
    </ProductCardStyled>
  );
};
