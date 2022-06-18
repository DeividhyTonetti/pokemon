import React, { FC } from "react";

import {
    CardContainer,
    CardNumaration,
    ChipContainer,
    ImageContainer,
    TitleName,
} from './styles';

export type ContentCardsProps = {
    curve?: number
    primary?: boolean
    backgroundColor?: string
    src?: string
    cardSize?: 'small' | 'medium' | 'larger'
    imageSize?: 'small' | 'medium' | 'larger'
    onClick?: () => void
}

const ContentCards: FC = (props: ContentCardsProps) => {

    return (
        <>
            <CardContainer
                color={props.backgroundColor}
                curve={props.curve}
                cardSize={props.cardSize}
            >

                <CardNumaration>
                    #001
                </CardNumaration>
                <TitleName>
                    Bulbasaur
                </TitleName>
                <ImageContainer
                    src={props.src}
                    imageSize={props.imageSize}
                />
                <ChipContainer>
                    TESTE
                </ChipContainer>
            </CardContainer>
        </>
    )
}

export { ContentCards }