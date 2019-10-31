import React from 'react';
import { Text } from 'rebass';

const ViewTeamPlayer = (props) => {

    const style = {
        textalign: 'left',
        padding: '8px', 
        margin: '8px', 
    }


    return (
        <Text fontSize={[ 1, 1, 12 ]} fontWeight='medium'>
            <div style={style}>
                <p>Name:{props.name}, Position:{props.pos}</p>
            </div> 
        </Text>
    )
}


export default ViewTeamPlayer;