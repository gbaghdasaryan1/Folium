
import styled from "styled-components";


export const ProductSliderrStyled = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;


.FL-productSlider-selected{
	width: 450px;
	height: 450px;
	object-fit: cover;
	margin: 0 auto;
	border: 1px solid green;
}

.mySwiper{
	width: 80%;
}



.FL-productSlider-item{
	min-width: 100px;
	display: flex;
  justify-content: center;
  align-items: center;
	background: #FFFFFF;
	border: 1px solid #E3E9EF;
	border-radius: 10px;
	padding: 3px;
}

.selected{
	border: 1px solid #D23F57;
}


.FL-productSlider-subImg{
	width: 100%;
	height: 70px;
	object-fit: cover;
	border-radius: 10px;
}
`;
