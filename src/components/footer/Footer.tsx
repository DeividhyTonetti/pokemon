import React, { FC } from "react";

import {
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

    return ( <ImageContainer /> )
}

export { Footer }