import styled from "styled-components";
import pockball from '../../assets/pockball.svg';
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
    display: grid;
    grid-template-columns: 0.2fr repeat(4, 1fr) 0.2fr repeat(3, 1fr) 0.2fr;
    grid-template-rows: 0.1fr 1fr 0.1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px; 

    overflow-wrap: break-word;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    background-color: ${(props) => props.color || '#7FA795'}; 
    width: 100%;
    height: auto;
    box-shadow: 0px 19px 38px 0px rgba(0,0,0,0.3);

    align-content: center;
    align-items: center;
    justify-items: center;
`;

export const Title = styled.div<TitleNameProps>`
    grid-area: 2 / 2 / 3 / 6;

    color: ${(props) => props.color || '#fff'};
    font-family: ${(props) => props.font || 'Copperplate'};
    font-size: 100%;
    font-weight: 500;
    letter-spacing: 4px;
    line-height: 3em;
    padding-left: 0.25em;
    color: rgba(0, 0, 0, 0.4);
    padding-bottom: 10px;
    
    h1 {
        position: relative;
        font-family: "Raleway", sans-serif;
    }

    h1 span {
        display: block;
        font-size: 0.7em;
        line-height: 1.3;
    }
`;

export const ImageContainer = styled.image<ImageContainerProps>`
    grid-area: 2 / 7 / 3 / 10;

    background-image: url(${pockball});
    background-repeat: no-repeat;
    width: 80%;
    height: 80%;  
`;


export const CardUser = styled.div`
    grid-area: 2 / 2 / 3 / 3;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 20px;
    background-color: #fff;
    width: 30%;
    height: 30%;
`;

export const ImageCard = styled.img`
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${chorrindo});
    border: none;
    width: 30%;
    height: 30%;
    margin-top: 10em;
`;


export const Badge = styled.span`
    background: #ce2c6c;
    border-radius: 99em;
    color: #fff;
    float: right;
    font-size: 16px;
    font-weight: 700;
    height: 1em;
    width: 1em;
    margin-top: -1em;
`;
