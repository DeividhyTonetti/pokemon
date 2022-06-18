import styled from "styled-components";
import footer from '../../assets/footer.svg';

type CardContainerProps = {
    color?: string
    curve?: number
    cardSize?: string
}

type ImageContainerProps = {
    src?: string
    imageSize?: string
}

export const CardContainer = styled.section<CardContainerProps>`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    align-content: center;
    align-items: center;
    justify-items: center;
`;


export const ImageContainer = styled.image<ImageContainerProps>`
    grid-area: 1 / 1 / 2 / 2;

    background-image: url(${footer});
    background-repeat: no-repeat;
    width: 300px;
    height: 100px;  
`;