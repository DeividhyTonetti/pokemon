import React from "react";
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

type SizeTypes = {
    small: string
    medium: string
    larger: string
}

const selectSize = (type: string) => {
    const size = {
        'small': '25%',
        'medium': '50%',
        'larger': '100%',
    } as SizeTypes

    return size[type || 'larger'];
}

export const CardContainer = styled.ul<CardContainerProps>`
    background-color: ${ (props) =>  props.color || '#fff' }; 
    --curve: ${ (props) => props.curve || 40 };
    max-width: ${ (props) => selectSize(props.cardSize as string) };
    max-height: ${ (props) => selectSize(props.cardSize as string) };
    display: grid;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 4rem 5vw;
    padding: 0;
    list-style-type: none;
`;

export const ListItems = styled.a`
    position: relative;
    display: block;
    height: 100%;  
    border-radius: calc(var(--curve) * 1px);
    overflow: hidden;
    text-decoration: none;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const ImageContainer = styled.img<ImageContainerProps>`
    src: ${ (props) => props.src || '' };
    width: ${ (props) => selectSize(props.imageSize as string) };
    height: ${ (props) => selectSize(props.imageSize as string) };
`;