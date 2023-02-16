
import styled from "styled-components";


export const MiniCardStyled = styled.div`
	padding: 16px;
	background: #FFFFFF;
	border-radius: 8px;
	width: 187px;

	.FL-miniCard-image{
	width: 153px;
	border-radius: 10px;

	}

	.FL-miniCard-price{
		margin-top: 8px;
		gap: 8px;
	}

	.FL-miniCard-real-price{
		font-weight: 600;
		font-size: 14px;
		line-height: 19px;
		color: #D23F57;

	}

	.FL-miniCard-dicount-price{
		font-size: 14px;
		line-height: 19px;
		text-align: center;
		text-decoration-line: line-through;
		color: #7D879C;
	}
`;
