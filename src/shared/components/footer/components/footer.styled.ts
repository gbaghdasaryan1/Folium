import styled from "styled-components";


export const FooterStyled = styled.footer`
background: #041533;
min-height: 100px;
padding: 30px;

.FL-footer-wrapper{
		gap: 65px;
	}

.FL-footer-description{

	width: 20%;

	.FL-footer-logo{
		font-weight: ${(p) => p.theme.typography.weight.semiBold};
    font-size: ${(p) => p.theme.typography.fontSize.h1};
		color: ${(p) => p.theme.palette.white};
		padding: 5px 0;
	}

	.FL-footer-description-text{
		font-size: ${(p) => p.theme.typography.fontSize.p14};
		color: ${(p) => p.theme.palette.gray400};
		line-height: 30px;
		letter-spacing: 1px;
	}
}

.FL-footer-ul{

	.FL-footer-ul-title{
		font-weight: ${(p) => p.theme.typography.weight.semiBold};
		font-size: ${(p) => p.theme.typography.fontSize.h2};
		line-height: 34px;
		color: ${(p) => p.theme.palette.white};
	}

	>a{
		font-weight: 400;
		font-size: 16px;
		line-height: 25px;
		color: ${(p) => p.theme.palette.gray500};
		text-decoration: none;
		transition: 100ms;

		:hover{
			color: ${(p) => p.theme.palette.white};
		}
	}
}
`;
