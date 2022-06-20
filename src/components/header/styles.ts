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
    display: grid;
    grid-template-columns: 0.2fr repeat(5, 1fr);
    grid-template-rows: repeat(2, 0.2fr) repeat(2, 0.6fr) 0.2fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;

    overflow-wrap: break-word;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    background-color: ${(props) => props.color || '#494949'}; 
    width: 100%;
    height: 154px;
     
    align-items: center;
    justify-items: stretch;
`;

export const Title = styled.div<TitleNameProps>`
    grid-area: 3 / 2 / 5 / 6;

    /* color: ${(props) => props.color || '#fff'}; */
    /* font-family: ${(props) => props.font || 'Copperplate'}; */
    font-size: 100%;
    font-weight: 500;
    letter-spacing: 4px;
    line-height: 3em;
    padding-left: 0.25em;
    color: rgba(0, 0, 0, 0.4);
    padding-bottom: 10px;
    
    h1 {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: ${(props) => props.color || '#fff'};
    }

    h1 span {
        display: block;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    }
`;

export const ImageContainer = styled.image<ImageContainerProps>`
    grid-area: 3 / 6 / 5 / 8;

    background-image: url(${pokball});
    background-repeat: no-repeat;
    width: 150px;
    height: 145px;  
    margin-top: 0.5em;
    margin-right: -1em;
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

export const NavBar = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
    color: rgb(13, 26, 38);
    position: fixed;
    top: 0;
    height: 60px;
    line-height: 60px;
    width: 100vw;
    z-index: 10;
`;

export const NavBarWrapper = styled.div`
    margin: auto;
    text-align: center;
    width: 70%;

    @media(max-width: 768px) {
        width: 90%;
    } 

    @media(max-width: 638px) {
        width: 100%;
    } 
`;

export const Logo = styled.div`
    float: left;
    margin-left: 28px;
    font-size: 1.5em;
    height: 60px;
    letter-spacing: 1px;
    text-transform: uppercase;
`;
