import React from 'react';
import { ThemeProvider } from 'emotion-theming'
import emotion from '@rebass/preset';
import { Flex, Box } from 'rebass';
import News from '../News/News';
import './Home.css'

function Home() {

    return (
        <ThemeProvider theme={emotion}>
            {/* <News /> */}
            <Flex>
                <Box p={2} width={2/3} color='black' >
                        <News />
                </Box>
            </Flex>
        </ThemeProvider>
    )
}

export default Home;