import { SectionSliderStyled } from './section-slider.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MiniCard } from '../../../shared/components/product-card/components/mini-card/mini-card';

export const SectionSlider = () => {
  const arr = Array.from(Array(10).keys());
  return (
    <SectionSliderStyled className='container'>
      <Swiper slidesPerView={8} spaceBetween={30} width={153} className='mySwiper'>
        {arr.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <MiniCard />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SectionSliderStyled>
  );
};
