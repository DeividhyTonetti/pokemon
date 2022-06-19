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
    grid-template-columns: 0.2fr 2.6fr 0.2fr; 
    grid-template-rows: 0.6fr 1.6fr 0.8fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        ". . ."
        ". image ."
        ". . ."; 
`;


export const ImageContainer = styled.image<ImageContainerProps>`

    grid-area: image; 
    background-image: url(${footer});
    background-repeat: no-repeat;
    
    width: 300px;
    height: 1000px;  
`;