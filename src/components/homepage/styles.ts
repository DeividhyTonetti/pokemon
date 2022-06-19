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
    position: absolute;
    left: 5.6%;
    right: -0.27%;
    top: 23.77%;
    bottom: 68.6%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;

    letter-spacing: -0.01em;

    color: #303943;
`;