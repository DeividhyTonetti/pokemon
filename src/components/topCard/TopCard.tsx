import React, { FC } from "react";

import {
    Badge,
    CardContainer,
    CardUser,
    Title,
    ImageContainer,
    ImageCard,
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

const TopCard: FC = (props: TopCardProps) => {

    return (
        <>
            <CardContainer
                color={props.backgroundColor}
                curve={props.curve}
                cardSize={props.cardSize}
            >
                <Title>
                    <h1>
                        Olá, Deividhy Tonetti
                        <span>
                            Bem Vindo! &#128515;
                        </span>
                    </h1>
                </Title>
                <ImageContainer>
                    
                </ImageContainer>
            </CardContainer>
        </>
    )
}

export { TopCard }