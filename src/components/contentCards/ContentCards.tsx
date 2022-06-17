import React, { FC } from "react";

import { CardContainer, ListItems, ImageContainer } from './styles';

export type HeaderCardProps = {
    curve?: number
    primary?: boolean
    backgroundColor?: string
    src?: string
    cardSize?: 'small' | 'medium' | 'large'
    imageSize: 'small' | 'medium' | 'large'
    onClick?: () => void
}

const ContentCards: FC = (props: HeaderCardProps) => {

    return (
        <>
            <CardContainer>
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

export { ContentCards }