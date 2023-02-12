import styled from "styled-components";


export const SectionStyled = styled.section`
min-height: 200px;
margin: 30px auto;

.FL-section-title-wrapper{
	padding-bottom: 5px;
	gap: 20px;
}

.FL-section-title{

	font-weight: ${(p) => p.theme.typography.weight.bold};
  font-size: ${(p) => p.theme.typography.fontSize.h2};
	line-height: 120%;
	color:  ${(p) => p.theme.palette.mainTextColor};
}

.FL-section-see-all{
	font-style: italic;
}

.FL-section-list{
	margin-top: 20px;
	height: max-content;
}
`;
