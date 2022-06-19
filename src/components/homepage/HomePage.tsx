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

    return (
        <Container>
            <Row>
                <Column mobile='6' tablet='12' desktop='12'>
                    
                    <Header />
                    <HomeTitle>
                        Qual Pokémon Você Escolheria
                    </HomeTitle>


                    <ContentCards
                        backgroundColor={'red'}
                        cardSize={'small'}
                        src={'https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-Clipart-Background.png'}
                    />

                    <ContentCards
                        backgroundColor={'green'}
                        cardSize={'small'}
                        src={'https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-Clipart-Background.png'}
                    />

                    <ContentCards
                        backgroundColor={'blue'}
                        cardSize={'small'}
                        src={'https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-Clipart-Background.png'}
                    />

                    <ContentCards
                        backgroundColor={'yellow'}
                        cardSize={'small'}
                        src={'https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-Clipart-Background.png'}
                    />

                    <ContentCards
                        backgroundColor={'pink'}
                        cardSize={'small'}
                        src={'https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-Clipart-Background.png'}
                    />

                    <ContentCards
                        backgroundColor={'purple'}
                        cardSize={'small'}
                        src={'https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-Clipart-Background.png'}
                    />

                
                    <Footer />
                </Column>
            </Row>

        </Container>
    )
}

export { HomePage }