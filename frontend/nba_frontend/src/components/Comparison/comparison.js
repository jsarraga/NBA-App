import React from 'react'
import PlayerContainer from '../PlayerContainter/PlayerContainer'
import { Flex, Box } from 'rebass';
import './Comparison.css';


const compare = () => {
    return(
        <Flex mx={-2}>
            <Box px={2} width={1/2}>
                <h2>Player one</h2>
                <PlayerContainer />
            </Box>
            <Box px={2} width={1/2}>
                <h2>Player two</h2>
                <PlayerContainer />
            </Box>
        </Flex>
     
    )
}

export default compare;