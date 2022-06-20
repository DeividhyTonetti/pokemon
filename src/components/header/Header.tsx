import React, { FC } from "react";

import {
    // Badge,
    CardContainer,
    CardUser,
    Title,
    ImageContainer,
    NavBar,
    NavBarWrapper,
    ImageCard,
    Logo,
} from './styles';

export type HeaderProps = {
    curve?: number
    primary?: boolean
    backgroundColor?: string
    src?: string
    cardSize?: 'small' | 'medium' | 'large'
    imageSize?: 'small' | 'medium' | 'large'
    device?: 'mobile' | 'desktop'
    onClick?: () => void
}

const Header: FC = (props: HeaderProps) => {

    return (
        <>
            {
                props.device === 'desktop' ?
                    <NavBar>
                        <NavBarWrapper>
                            <Logo />
                        </NavBarWrapper>
                    </NavBar>
                    :
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
            }
        </>
    )
}

export { Header }