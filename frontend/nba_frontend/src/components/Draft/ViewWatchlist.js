import React, { useState, useEffect } from 'react';
import RadarCharts from '../Charts/RadarCharts';
import { Flex, Box, Text } from 'rebass';

const ViewWatchlist = (props) => {
    
    const style = {
        display: 'inline-block', 
        padding: '30px', 
        margin: '8px', 
        border: '1px solid black',
        background: '#eee'
    }

    return (
        <Flex p={2} mx={-2} >
            <Box px={2} width={1/2} style={style}>
                <Text fontSize={[ 1, 1, 20 ]} fontWeight='medium'>
                    <p>Name: {props.data.name}</p> 
                    <p>Position: {props.data.pos}</p>
                </Text>
            </Box>
            <Box px={2} width={3/4} style={style}>
                <RadarCharts data={props.data}/>
            </Box>
        </Flex>
    )
}


export default ViewWatchlist;