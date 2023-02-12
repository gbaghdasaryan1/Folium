import styled from "styled-components";


export const AdvertisementBannerStyled = styled.div`
background: ${(p) => p.theme.palette.white};
.FL-advertisementPoster{
	min-height: 400px;
	gap: 60px;
}

.FL-advertisementPoster-details{
	color: ${(p) => p.theme.palette.mainTextColor};

	>h2{
		font-weight: ${(p) => p.theme.typography.weight.bold};
		font-size: ${(p) => p.theme.typography.fontSize.display3};
		line-height: 120%;
		text-transform: capitalize;
	}

	>p{
		font-size: ${(p) => p.theme.typography.fontSize.h5};
		line-height: 30px;
	}

	>button{
		width: 127px;
		height: 44px;
		margin-top: 40px;
		font-weight: ${(p) => p.theme.typography.weight.semiBold};
		font-size: ${(p) => p.theme.typography.fontSize.p14};
		line-height: 150%;
		background: ${(p) => p.theme.palette.primary500};
		border: none;
		border-radius: 8px;
		text-align: center;
		color: ${(p) => p.theme.palette.white};
		transition: 200ms;

		:hover{
		background: ${(p) => p.theme.palette.primary700};
		box-shadow: ${(p) => p.theme.shadow.regular};
		}
	}

}

.FL-advertisementPoster-image{
	width: 345px;
	height: 325px;
}

`;
