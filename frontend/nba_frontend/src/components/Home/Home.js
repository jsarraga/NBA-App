import React from 'react';
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import { Flex, Box } from 'rebass';
import News from '../News/News';
import Watchlist from '../Watchlist/Watchlist';
import PlayerUpdate from '../PlayerUpdate/PlayerUpdate'
import './Home.css'

function Home() {

    return (
        <ThemeProvider theme={theme}>
            <Flex>
                <Box p={4} width={2/3} color='black' bg='tansparent'>
                    <div className="feed" >
                        <p>News Feed</p>
                        <News />
                        <Watchlist />
                        <p>multiple player update components in right column</p>
                        <PlayerUpdate />
                    </div>
                </Box>
            </Flex>
        </ThemeProvider>
    )
}

export default Home;