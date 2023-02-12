import styled from "styled-components";


export const SearchWrapperStyled = styled.div`
	min-width: 550px;
	height: 45px;
	position: relative;

	.FL-search-icon{
		position: absolute;
		left: 17px;
		stroke:  #879AB0;
	}


	.FL-allCategories-dropdown{
		width: 190px;
		height: 100%;
		gap: 9px;
		font-size: ${(p) => p.theme.typography.fontSize.p14};
		line-height: 19px;
		background:  ${(p) => p.theme.palette.gray100};
		border: 1px solid  ${(p) => p.theme.palette.gray300};
		border-radius: 0px 25px 25px 0px;
		color: ${(p) => p.theme.palette.gray700};
		cursor: pointer;
		position: relative;
		z-index: ${(p) => p.theme.zIndex.highIndex};
	}

	.FL-allCategories-dropdown-content{
		width: 100%;
		min-height: 200px;
		padding: 5px;
		position: absolute;
		top: 45px;
		box-shadow: ${(p) => p.theme.shadow.regular};
		background: ${(p) => p.theme.palette.white};
		border-radius: 8px;

		.FL-allCategories-dropdown-item{
			padding: 8px 2px;
			margin: 3px 0;
			font-size: ${(p) => p.theme.typography.fontSize.p14};
			line-height: 19px;
			color: ${(p) => p.theme.palette.gray700};
			transition: 200ms;
			:hover{
				background: ${(p) => p.theme.palette.primary100};
				color: ${(p) => p.theme.palette.primary500};
			}
		}
		.active-item{
				background: ${(p) => p.theme.palette.primary100};
				color: ${(p) => p.theme.palette.primary500};
			}
	}
`;

export const SearchStyled = styled.input`
	width: 100%;
	height: 100%;
	border: 1px solid ${(p) => p.theme.palette.gray300};
	border-right: none;
	border-radius: 37px 0 0 37px ;
	padding-left: 45px;
	padding-right: 15px;


`;
