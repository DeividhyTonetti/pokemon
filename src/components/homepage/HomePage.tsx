import React, { FC } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ContentCards } from "../contentCards/ContentCards";

import {
    HomeTitle,
    Container,
    Row,
    Column,
} from './styles'



const HomePage: FC = (props) => {

    const teste = [0, 1, 2, 3, 4, 5];

    return (
        <Container>
            <Row>
                <Header />
            </Row>
            <Row>
                <Column mobile='6' tablet='12' desktop='12'>
                    <HomeTitle>
                        Qual pokémon você escolheria?
                    </HomeTitle>
                </Column>
            </Row>
            <Row>
                <Column mobile='6' tablet='12' desktop='12'>
                {
                    teste.map( () => (
                        <ContentCards
                            backgroundColor={'red'}
                            cardSize={'small'}
                            src={'https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-Clipart-Background.png'}
                        />
                    )) 
                }
                    </Column>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}

export { HomePage }