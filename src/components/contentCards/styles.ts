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

const selectWidthCard = (type: string) => {
    const size = {
        'small': '150px',
        'medium': '50%',
        'larger': '100%',
    } as SizeTypes

    return size[type];
}

const selectHeightCard = (type: string) => {
    const size = {
        'small': '110px',
        'medium': '50%',
        'larger': '100%',
    } as SizeTypes

    return size[type];
}

export const CardContainer = styled.section<CardContainerProps>`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 0.3fr 0.1fr repeat(3, 0.3fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    float: left;
    overflow-wrap: break-word;
    border-radius: ${(props) => props.curve || '15px'};
    background-color: ${(props) => props.color || '#7FA795'}; 
    
    width: ${(props) => selectWidthCard(props.cardSize as string)};
    height: ${(props) => selectHeightCard(props.cardSize as string)};
    
   
    box-shadow: 0px 19px 38px 0px rgba(0,0,0,0.3);

    margin-right: 0.7em;
    margin-bottom: 1em;

    justify-items: end;
    align-content: center;

    /* @media only screen and (min-width: 768px) {
        ${({ mobile }) => mobile && getWitdhGrid(mobile)}
    }
    
    @media only screen and (min-width: 768px) {
        ${({ tablet }) => tablet && getWitdhGrid(tablet)}
    }
    
    @media only screen and (min-width: 1000px) {
        ${({ desktop }) => desktop && getWitdhGrid(desktop)}
    } */
`;

export const CardNumaration = styled.div<TitleNameProps>`
    grid-area: 1 / 3 / 2 / 6;
    color: ${(props) => props.color || '#fff'};
    font-size: ${(props) => props.size || '14px'};
    font-family: ${(props) => props.font || 'Inter'};
    font-weight: 500;
    margin: 10px;
	text-align: center;
`;

export const TitleName = styled.div<TitleNameProps>`
    grid-area: 3 / 1 / 4 / 4;
    color: ${(props) => props.color || '#fff'};
    font-size: ${(props) => props.size || '14px'};
    font-family: ${(props) => props.font || 'Inter'};
    font-weight: 500;
    /* margin-left: 1em;
	margin-right: 1em; */
`;

export const ImageContainer = styled.div<ImageContainerProps>`
    grid-area: 3 / 4 / 6 / 6;
    background-image: url(${(props) => props.src || ''});
    background-repeat: no-repeat;
    background-size: contain;
    min-width: 80px;
    min-height: 70px;
    margin-right: 0.1em;
`;

export const ChipContainer = styled.div`
    grid-area: 4 / 1 / 5 / 3;
    display: inline-flex;
    flex-direction: row;
    width: 45px;
    height: 16px;
    outline: none;
    font-weight: 500;
    font-size: 8px;
    line-height: 28px;
    align-items: center;
    border-radius: 38px;
    background: rgba(229, 229, 229, .4);
    justify-content: center;
    color: ${(props) => props.color || '#fff'};
    margin-left: 1em;
`;

