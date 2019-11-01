import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RadarCharts from '../Charts/RadarCharts'
import { Flex, Box, Text } from 'rebass';

const ViewTeamPlayer = (props) => {
    const name = props.name.split(" ");
    const firstname = name[0];
    const lastname = name[1];
    const [playerData, setPlayerData] = useState({tm: "GSW", pts:0, ast: 0, reb:0, fgp:0, 
    ftp:0, g:0, gs:0, mp:0, reb:0, stl:0, 
    tov:0, tpm:0, blk:0 });
    const [isLoading, setIsLoading] = useState(true);
    const [nothing, setNothing] = useState('');
    const [isError, setIsError] = useState(false)
    

    useEffect( () => {
        const fetchData = async () => {
          setIsLoading(true);
          setIsError(false);
          try {
            const result = await axios(`http://localhost:5000/${firstname}/${lastname}/recent_stats`);
            setPlayerData(result.data);
            console.log(result.data)
          } catch (error) {
            setIsError(true);
          }
          setIsLoading(false);
        };
        fetchData();
      }, [nothing]);
    

    const style = {
        display: 'inline-block', 
        padding: '16px', 
        margin: '8px', 
        border: '1px solid black',
        backgroundcolor: 'white'
    }


    return (
        <Flex px={2} mx={-2}>
            <Box px={2} width={1/2} style={style}>
                <Text fontSize={[ 1, 1, 12 ]} fontWeight='medium'>
                    <p>Name:{props.name} Position:{props.pos}</p>
                </Text>
            </Box>
            <Box px={2} width={1/2} style={style}>
                <RadarCharts data={playerData}/>
            </Box>
        </Flex>
    )
}


export default ViewTeamPlayer;