import { useParams } from 'react-router-dom';
import { MainLayout } from '../../layouts/main/main-layout';
import { ProductCard } from '../../shared/components/product-card/components/product-card';
import { SalePageStyled } from './sale-page.styled';

export const SalePage = () => {
  const arr = Array.from(Array(10).keys());
  const { query } = useParams();
  console.log(query);

  return (
    <MainLayout>
      <SalePageStyled className='flex-center'>
        <div className='container'>
          <h5 className='FL-salePage-title'>Searching for “ {query} ”</h5>
          <p className='FL-salePage-find-items-count'>48 results found</p>

          <div className='FL-product-list'>
            {arr.map(() => {
              return <ProductCard />;
            })}
          </div>
        </div>
      </SalePageStyled>
    </MainLayout>
  );
};
