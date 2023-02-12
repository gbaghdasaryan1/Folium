import { FC } from 'react';
import { ProductLabelType } from '../labels.type';
import { ProductLabelStyled } from './product-label.styled';

export const ProductLabel: FC<ProductLabelType> = ({
  background = 'tomato',
  text,
  textColor = '#ffffff',
}) => {
  return (
    <ProductLabelStyled className='flex-center' style={{ background, color: textColor }}>
      {text}
    </ProductLabelStyled>
  );
};
