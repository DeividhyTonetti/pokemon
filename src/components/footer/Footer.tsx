import React, { FC } from "react";

import {
    CardContainer,
    ImageContainer,
} from './styles';

export type TopCardProps = {
    curve?: number
    primary?: boolean
    backgroundColor?: string
    src?: string
    cardSize?: 'small' | 'medium' | 'large'
    imageSize?: 'small' | 'medium' | 'large'
    onClick?: () => void
}

const Footer: FC = (props: TopCardProps) => {

    return (
        <>
            <CardContainer
                color={props.backgroundColor}
                curve={props.curve}
                cardSize={props.cardSize}
            >
                <ImageContainer />
            </CardContainer>
        </>
    )
}

export { Footer }