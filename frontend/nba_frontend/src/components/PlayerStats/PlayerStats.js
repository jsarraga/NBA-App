import React, { useState } from 'react';
import ViewPlayerStats from './ViewPlayerStats'
import './PlayerStats.css';

const PlayerStats = (props) => {

    return(
        <div>
            <ViewPlayerStats data={props.data} /> 
        </div>
    )
}

export default PlayerStats;