import styled from "styled-components";


export const ProductLabelStyled = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 15px;
    padding: 2px 7px;
    font-size:  ${(p) => p.theme.typography.fontSize.p12};
    line-height: 160%;
`;
