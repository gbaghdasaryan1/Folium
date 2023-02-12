import styled from "styled-components";


export const NavigationStyled = styled.nav`


.Fl-navigation-ul{
	gap: 50px;
}

.Fl-navigation-li{


	>a{
		font-size: ${(p) => p.theme.typography.fontSize.p14};
		line-height: 19px;
		color: ${(p) => p.theme.palette.mainTextColor};
		text-decoration: none;
	}
	.active-nav-item{
		color: red;
	}
	
}

`;
