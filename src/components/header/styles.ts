import styled from "styled-components";
import pokball from '../../assets/pokball.svg';
import chorrindo from '../../assets/chorrindo.jpg';

type CardContainerProps = {
    color?: string
    curve?: number
    cardSize?: string
}

type ImageContainerProps = {
    src?: string
    imageSize?: string
}

type TitleNameProps = {
    size?: string
    color?: string
    font?: string
}

type SizeTypes = {
    small: string
    medium: string
    larger: string
}

export const CardContainer = styled.section<CardContainerProps>`
   
`;

export const Title = styled.div<TitleNameProps>`
    
`;

export const ImageContainer = styled.image<ImageContainerProps>`
     
`;


export const CardUser = styled.div`

`;

export const ImageCard = styled.img`
   
`;


export const Badge = styled.span`

`;
