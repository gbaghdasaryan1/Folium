import { useRef, useState } from 'react';
import classes from 'classnames';
import { ProductSliderrStyled } from './product-slider.styled';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Pagination } from 'swiper';
import { productSubImgs } from '../product-slider.constants';
import { Swiper as SwiperType } from 'swiper';

export const ProductSlider = () => {
  const ref = useRef<SwiperType | null>(null);
  const [selected, setSelected] = useState<string>(
    'https://makeupandbeauty.com/wp-content/uploads/2015/06/Some-Jewelry-Mistakes-you-are-Probably-Making-1.jpg',
  );

  const handleSliderItemClick = (title: string) => {
    console.log(title);
    setSelected(title);
  };

  return (
    <ProductSliderrStyled>
      <img src={selected} alt='' className='FL-productSlider-selected' />
      <Swiper
        slidesPerView={7}
        spaceBetween={20}
        centeredSlides
        onBeforeInit={(swiper) => {
          ref.current = swiper;
          swiper.activeIndex = 4;
        }}
        onSlideChange={(swiper) => {
          // setActive(swiper?.realIndex);
        }}
        onAfterInit={(swiper) => {
          swiper.activeIndex = 4;
          ref.current = swiper;
          console.log(swiper);
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
      >
        {productSubImgs.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className={classes('FL-productSlider-item', {
                selected: selected === item,
              })}
              onClick={() => handleSliderItemClick(item)}
            >
              <img src={item} alt='img' className='FL-productSlider-subImg' />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ProductSliderrStyled>
  );
};
