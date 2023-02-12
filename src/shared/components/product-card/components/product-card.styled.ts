import styled from "styled-components";


export const ProductCardStyled = styled.div`
  width: 270px;
  min-height: 360px;
  padding-bottom: 5px;
  background: ${(p) => p.theme.palette.white};
  border-radius: 10px;
  box-shadow: ${(p) => p.theme.shadow.regular};
  cursor: pointer;
  position: relative;


  .FL-product-card-img-wrapper{
    border-radius: 10px;
  }

  .FL-product-card-details{
    padding: 0 5px;
  }
  .FL-product-card-name{
    font-weight: ${(p) => p.theme.typography.weight.semiBold};
    font-size: ${(p) => p.theme.typography.fontSize.h3};
    padding: 5px 15px;
    color: ${(p) => p.theme.palette.mainTextColor};

    >svg{
      width: 17px;
      height: 17px;
      stroke: ${(p) => p.theme.palette.primary500};
      transition: 500ms;

      :hover{
        fill: ${(p) => p.theme.palette.primary900};
      }
    }
  }
  .FL-product-card-price{
    font-size: ${(p) => p.theme.typography.fontSize.p14};
    display: flex;
    gap: 10px;
    font-weight: ${(p) => p.theme.typography.weight.semiBold};
    line-height: 19px;
    color: ${(p) => p.theme.palette.gray600};
    padding:0 15px;
  }
  .FL-product-card-discount-price{
    color: ${(p) => p.theme.palette.primary500};
  }
  .FL-product-card-real-price{
    text-decoration: line-through;
  }
`;
export const ProductCardImageStyled = styled.img`
width: 100%;
height: 270px;
object-fit: contain;
border-radius: 10px;
`;

export const BuyNowBtnStyled = styled.button`
  width: 100%;
  padding: 11px 0;
  margin: 10px 0;
  background: ${(p) => p.theme.palette.secondary400};
  border-radius: 8px;
  border: none;
  font-weight: ${(p) => p.theme.typography.weight.semiBold};
  font-size: ${(p) => p.theme.typography.fontSize.h4};
  line-height: 150%;
  text-align: center;
  color: ${(p) => p.theme.palette.white};
  transition: 200ms;


  :hover{
    background: ${(p) => p.theme.palette.secondary700};
  }
`;
