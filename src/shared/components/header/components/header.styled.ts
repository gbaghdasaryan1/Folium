import styled from "styled-components";


export const HeaderStyled = styled.header`
    padding: 15px 0;
    background: ${(p) => p.theme.palette.white};
    


    .FL-header-search-block{
      width: 100%;
      
    }
    
    .FL-header-search-block-icons{
      gap: 20px;
    }

    .FL-header-search-block-icon{
        width: 44px;
        height: 44px;
        background: ${(p) => p.theme.palette.gray200};
        border-radius: 100%;
        cursor: pointer;
        position: relative;
        transition: 200ms;

        .FL-header-basket-count{
          width: 22px;
          height: 19px;
          background: ${(p) => p.theme.palette.primary500};
          border-radius: 15px;
          position: absolute;
          top: 0;
          right: 0;
          font-size: ${(p) => p.theme.typography.fontSize.p10};
          line-height: 160%;
          text-align: center;
          color: ${(p) => p.theme.palette.white};
          border: 1px solid transparent;
          box-shadow: none;
        }

        :hover{
          border-color: ${(p) => p.theme.palette.gray300};
          box-shadow: ${(p) => p.theme.shadow.regular};
          background: ${(p) => p.theme.palette.gray300};

        }

      svg{
        width: 15px;
        fill: ${(p) => p.theme.palette.gray700};
      }
    }
`;
