
import styled from "styled-components";


export const ProductDetailsStyled = styled.div`

.FL-product-details{
  border: 1px solid green;
  min-height: 199px;
  margin: 0 auto;
  margin-bottom: 100px;
}

.FL-product-image-slider{
  width: 45%;
  border: 1px solid red;
  min-height: 550px;

  .FL-product-selected-image{
    width: 500px;
    height: 450px;
    object-fit: cover;
    border: 1px solid green;
    margin: 0 auto;
  }
}

`;

export const ProductDetailsOptionsStyled = styled.div`
  width: 45%;
  border: 1px solid blue;
  min-height: 550px;

  .FL-product-details-name{
    font-weight:  ${(p) => p.theme.typography.weight.bold};
    font-size:  ${(p) => p.theme.typography.fontSize.h1};
    line-height: 110%;
    color: ${(p) => p.theme.palette.mainTextColor};

  }

  .FL-product-details-quantity{
    font-weight:  ${(p) => p.theme.typography.weight.semiBold};
    font-size:  ${(p) => p.theme.typography.fontSize.p14};
    line-height: 110%;
    letter-spacing: 0.2px;
    color: ${(p) => p.theme.palette.mainTextColor};
    margin: 5px 0;

  }

  .FL-product-details-price{
    font-weight:  ${(p) => p.theme.typography.weight.bold};
    font-size:  ${(p) => p.theme.typography.fontSize.h2};
    line-height: 34px;
    letter-spacing: 0.2px;
    color: ${(p) => p.theme.palette.primary500};
  }
  
  .FL-product-details-buyNow{
    width: 137px;
    height: 44px;
    background: ${(p) => p.theme.palette.primary500};
    border-radius: 8px;
    border: none;
    font-weight: ${(p) => p.theme.typography.weight.semiBold};
    font-size: ${(p) => p.theme.typography.fontSize.p14};
    line-height: 150%;
    text-align: center;
    color: ${(p) => p.theme.palette.white};
    margin: 24px 0;

  }

  .FL-product-details-description{
    width: 50%;
    font-weight:  ${(p) => p.theme.typography.weight.semiBold};
    font-size:  ${(p) => p.theme.typography.fontSize.p12};
    line-height: 20px;
    letter-spacing: 0.2px;
    color: ${(p) => p.theme.palette.mainTextColor};
  }

`;
