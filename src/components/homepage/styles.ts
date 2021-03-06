import styled from "styled-components";

type CardContainerProps = {
    color?: string
    curve?: number
    cardSize?: string
}

const getWitdhGrid = (value: number) => {
    if(!value) return;

    const width = value / 12 * 100;
    return `width: ${width}%;`;
}

export const Container = styled.section<CardContainerProps>`
    max-width: 1360px;
    box-sizing: border-box;
    &:before {
        content: ' ';
        display: table;
    }
    &:after {
        clear: both;
    }
`;

export const Row = styled.div`
    width: 100%;
    height: auto;
    float: left;
    box-sizing: border-box;
    &:before {
        content: ' ';
        display: table;
    }
    &:after {
        clear: both;
    }
`;

export const Column = styled.div<any>`
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;

    padding-left: 1em;
    padding-right: 1em;

    @media only screen and (min-width: 768px) {
        ${({ mobile }) => mobile && getWitdhGrid(mobile)}
    }
    
    @media only screen and (min-width: 768px) {
        ${({ tablet }) => tablet && getWitdhGrid(tablet)}
    }
    
    @media only screen and (min-width: 1000px) {
        ${({ desktop }) => desktop && getWitdhGrid(desktop)}
    }
`;

export const HomeTitle = styled.div`
    position: flex;
   
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: -0.01em;
    
    margin-top: 1em;
    margin-bottom: 1em;

    color: #303943;
`;