import React from 'react';
import { Text, Flex, Box } from 'rebass';
import './PlayerInfo.css';

const PlayerInfo = (props) => {

    return(
        <div classname="info">
            <Text fontSize={[ 1, 1, 2 ]} fontWeight='600px' >
                <Flex px={2} mx={-2}>
                    <Box px={2} width={1/2} >
                        <p>Name: {props.data.name}</p>
                        <p>Age: {props.data.age}</p>
                    </Box>
                    <Box px={2} width={1/2} >
                        <p>Position: {props.data.pos}</p>
                        <p> Team: {props.team}</p>
                    </Box>
                </Flex>
            </Text>
        </div>
    )
}

export default PlayerInfo;