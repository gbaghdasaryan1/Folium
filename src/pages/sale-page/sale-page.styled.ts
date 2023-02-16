
import styled from "styled-components";


export const SalePageStyled = styled.div`

.FL-salePage-title{
	font-weight: ${(p) => p.theme.typography.weight.semiBold};
	font-size: ${(p) => p.theme.typography.fontSize.h5};
	line-height: 22px;
	color:  ${(p) => p.theme.palette.mainTextColor};

}

.FL-salePage-find-items-count{
	font-size: ${(p) => p.theme.typography.fontSize.h5};
	line-height: 22px;
	color: ${(p) => p.theme.palette.gray600};
	margin-bottom: 55px;
}

.FL-product-list{
	display: grid;
	justify-content: space-between;
	grid-template-columns: auto auto auto auto auto;
	row-gap: 80px;
}
`;
