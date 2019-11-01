import React from 'react';
import { Text } from 'rebass';
import './PlayerInfo.css';

const PlayerInfo = (props) => {

    return(
        <Text fontSize={[ 1, 1, 18 ]} fontWeight='medium'>
            <div >
                <p>Name:{props.data.name}, Age:{props.data.age}, Position:{props.data.pos}, Team: {props.team}</p>
            </div> 
        </Text>
    )
}

export default PlayerInfo;