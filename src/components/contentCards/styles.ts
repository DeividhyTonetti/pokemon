import styled from "styled-components";

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

const selectSize = (type: string) => {

    console.log('OPP: ', type);
    const size = {
        'small': '25%',
        'medium': '50%',
        'larger': '100%',
    } as SizeTypes

    return size[type];
}

export const CardContainer = styled.section<CardContainerProps>`
    display: grid;
    grid-template-columns: repeat(2, 1fr) 0.1fr repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr) repeat(2, 0.3fr) repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    float: left;
    overflow-wrap: break-word;
    border-radius: ${(props) => props.curve || '40px'};
    background-color: ${(props) => props.color || '#7FA795'}; 
    width: ${(props) => selectSize(props.cardSize as string)};
    height: ${(props) => selectSize(props.cardSize as string)};
    min-width: 246px;
    min-height: 180px;
    box-shadow: 0px 19px 38px 0px rgba(0,0,0,0.3);
`;

export const CardNumaration = styled.div<TitleNameProps>`
    grid-area: 1 / 5 / 2 / 7;
    color: ${(props) => props.color || '#fff'};
    font-size: ${(props) => props.size || '20px'};
    font-family: ${(props) => props.font || 'Copperplate'};
    font-weight: 700;
    margin: 10px;
	text-align: center;
`;

export const TitleName = styled.div<TitleNameProps>`
    grid-area: 2 / 1 / 3 / 6;
    color: ${(props) => props.color || '#fff'};
    font-size: ${(props) => props.size || '20px'};
    font-family: ${(props) => props.font || 'Copperplate'};
    font-weight: 700;
    margin-left: 1em;
	margin-right: 1em;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
    grid-area: 4 / 4 / 7 / 6;
    background-image: url(${(props) => props.src || ''});
    background-repeat: no-repeat;
    background-size: contain;
    min-width: 100px;
    min-height: 100px;
    margin-right: 1em;
`;

export const ChipContainer = styled.div`
    grid-area: 4 / 1 / 5 / 3; 
    display: inline-flex;
    flex-direction: row;
    max-width: 80px;
    height: 25px;
    outline: none;
    font-size: 12px;
    font-family:"Open Sans", sans-serif;
    align-items: center;
    border-radius: 16px;
    background: rgba(229, 229, 229, .5);
    justify-content: center;
    color: ${(props) => props.color || '#fff'};
    font-weight: 700;
    margin-left: 2em;
`;

