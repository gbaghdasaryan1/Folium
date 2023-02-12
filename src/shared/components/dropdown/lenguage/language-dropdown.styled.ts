import styled from "styled-components";


export const LanguageDropdownStyled = styled.div`

color: ${(p) => p.theme.palette.white};
cursor: pointer;
letter-spacing: 1px;

.FL-language-view{
  gap: 5px;
}
.FL-language-dropdown-current-img{
  width: 25px;
}

`;

export const LanguageDropdownContentStyled = styled.div`

width: max-content;
position: absolute;
right: 0;
padding: 5px;
background: ${(p) => p.theme.palette.white};
border-radius: 8px;
color: ${(p) => p.theme.palette.gray900};
box-shadow: ${(p) => p.theme.shadow.regular};
z-index: ${(p) => p.theme.zIndex.highIndex};

.FL-language-item{
  margin: 8px 0;
  padding: 5px;
  gap: 5px;
  >img{
    width: 25px;
  }

  :hover{
    background-color:  ${(p) => p.theme.palette.gray200};
  }
}

`;
