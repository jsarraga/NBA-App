import React, { useState } from 'react';
import axios from 'axios';
import ViewPlayerStats from '../ViewPlayerStats/ViewPlayerStats'
import './PlayerStats.css';

const PlayerStats = (props) => {

    return(
        <div>
            <p>Stats</p>
            <ViewPlayerStats data={props.data} /> 
        </div>
    )
}

export default PlayerStats;