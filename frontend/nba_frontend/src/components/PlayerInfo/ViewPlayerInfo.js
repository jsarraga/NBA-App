import React from 'react';
import { Text } from 'rebass';

const ViewPlayerInfo = (props) => {

    const style = {
        textalign: 'left',
        padding: '8px', 
        margin: '8px', 
    }


    return (
        <Text fontSize={[ 1, 1, 12 ]} fontWeight='medium'>
            <div style={style}>
                <span>{console.log(props.team)}</span>
                <p>Name:{props.data.name}, Age:{props.data.age}, Position:{props.data.pos}, Team: {props.team}</p>
            </div> 
        </Text>
    )
}


export default ViewPlayerInfo;