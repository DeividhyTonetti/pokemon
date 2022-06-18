import React, { FC } from "react";

import { CardContainer, ListItems, ImageContainer } from './styles';

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
                <li>
                    <ListItems>
                        <ImageContainer 
                            src={props.src} 
                            imageSize={props.imageSize}
                        />
                    </ListItems>
                </li>
            </CardContainer>
        </>
    )
}

export { TopCard }