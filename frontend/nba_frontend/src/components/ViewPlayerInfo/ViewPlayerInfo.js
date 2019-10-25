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
            <p>Name:{props.name}, Age:{props.age}, Position:{props.pos}</p>
        </div> 
    )
}


export default ViewPlayerInfo;