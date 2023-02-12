import styled from "styled-components";


export const CategoriesStyled = styled.div`
width: 278px;
height: 40px;
padding: 0 17px;
background: #F6F9FC;
border-radius: 4px;

cursor: pointer;
position: relative;


.FL-category-block{
  width: 100%;
  gap: 10px;
  position: relative;
  font-weight: ${(p) => p.theme.typography.weight.bold};
  font-size: ${(p) => p.theme.typography.fontSize.p14};
  line-height: 19px;
  letter-spacing: 1px;
  color: ${(p) => p.theme.palette.gray600};

  .FL-category-burger{
  width: 25px;
  fill:  ${(p) => p.theme.palette.secondary500};
}

  .FL-category-arrow{
    position: absolute;
    right: 0;
    color:  ${(p) => p.theme.palette.secondary500};
  }
}
`;

export const CategoryDropdownStyled = styled.ul`

  width: 278px;
  min-height: 200px;
  background: #FFFFFF;
  border-radius: 8px;
  position: absolute;
  top: 40px;
  left: 0;
  box-shadow: ${(p) => p.theme.shadow.regular};
  z-index: ${(p) => p.theme.zIndex.highIndex};
  padding: 5px;


  .FL-category-item{
      padding: 8px 2px;
			margin: 3px 0;
			font-size: ${(p) => p.theme.typography.fontSize.p14};
			line-height: 19px;
			color: ${(p) => p.theme.palette.gray700};
			transition: 200ms;
      gap: 10px;
			:hover{
				background: ${(p) => p.theme.palette.primary100};
				color: ${(p) => p.theme.palette.primary500};
			}
      .FL-category-item-icon{
        width: 18px;
        height: 18px;
      }
  }
`;
