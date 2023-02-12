import { FC } from 'react';
import { ProductCard } from '../../shared/components/product-card/components/product-card';
import { SectionStyled } from './section.styled';

type SectionPropsType = {
  title: string;
  seeAllPath: string;
  query: string;
};

export const Section: FC<SectionPropsType> = ({ title, seeAllPath, query }) => {
  return (
    <SectionStyled className='container'>
      <div className='FL-section-title-wrapper flex align-end'>
        <h2 className='FL-section-title'>{title}</h2>
        <a href={seeAllPath} rel='noreferrer' className='FL-section-see-all'>
          See all
        </a>
      </div>
      <div className='FL-section-list flex flex-between'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </SectionStyled>
  );
};
