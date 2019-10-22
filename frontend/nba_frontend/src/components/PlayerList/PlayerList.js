import React, { useState } from 'react'
import axios from 'axios';
import './PlayerList.css';

const PlayerList = (props) => {
    

    return ( 
        <div>
            <p> Name:{props.name}</p>
            <p> Age:{props.age} </p>
            <p> Position:{props.pos}</p>
        </div> 
    )
}

export default PlayerList;