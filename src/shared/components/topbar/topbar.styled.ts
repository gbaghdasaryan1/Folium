import styled from "styled-components";


export const TopbarStyled = styled.div`
height: 40px;


background:  ${(p) => p.theme.palette.secondary500};

.FL-topbar-contact{
	gap: 15px;

	>a{
		gap: 5px;
		font-size: ${(p) => p.theme.typography.fontSize.p12};
		color: ${(p) => p.theme.palette.white};
		text-decoration: none;
	}

	.FL-topbar-call-icon{
		stroke: white;
		width: 15px;
		height: 15px;
	}

	.FL-topbar-mail-icon{
		stroke: white;
		width: 15px;
		height: 15px;
	}
}

.FL-topbar-right{
	gap: 15px;
	color: ${(p) => p.theme.palette.white};

}
`;
