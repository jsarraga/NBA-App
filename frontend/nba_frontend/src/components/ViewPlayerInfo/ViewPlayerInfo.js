import React from 'react'

const ViewPlayerInfo = (props) => {

    const style = {
        display: 'inline-block', 
        padding: '16px', 
        margin: '16px', 
        border: '1px solid black'
    }


    return (
        <div style={style}>
            <span>{console.log(props.team)}</span>
            <p>Name:{props.data.name}, Age:{props.data.age}, Position:{props.data.pos}, Team: {props.team}</p>
        </div> 
    )
}


export default ViewPlayerInfo;