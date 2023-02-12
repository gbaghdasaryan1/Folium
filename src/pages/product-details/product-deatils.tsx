import { MainLayout } from '../../layouts/main/main-layout';
import { ProductSlider } from '../../sliders/product-slider/components/product-slider';
import { ProductDetailsOptionsStyled, ProductDetailsStyled } from './product-deatils.styled';

export const ProductDetailsPage = () => {
  return (
    <ProductDetailsStyled>
      <MainLayout>
        <div className='FL-product-details container flex-center'>
          <div className='FL-product-image-slider '>
            <ProductSlider />
          </div>
          <ProductDetailsOptionsStyled>
            <h1 className='FL-product-details-name'>Xiaomi 410 Headphone - Orange</h1>
            <p className='FL-product-details-quantity'>Quantity: 44</p>

            <p className='FL-product-details-price'>Price: 35000 AMD</p>
            <button className='FL-product-details-buyNow'>Buy Now</button>
            <p className='FL-product-details-description'>
              Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt fugiat
              aliquam esse provident eveniet. Aut.
            </p>
          </ProductDetailsOptionsStyled>
        </div>
      </MainLayout>
    </ProductDetailsStyled>
  );
};
