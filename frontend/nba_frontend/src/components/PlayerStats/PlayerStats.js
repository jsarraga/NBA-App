import React from 'react';
import ViewPlayerStats from './ViewPlayerStats'
import './PlayerStats.css';

const PlayerStats = (props) => {

    return(
        <div className='stats'>
            <ViewPlayerStats data={props.data} /> 
        </div>
    )
}

export default PlayerStats;