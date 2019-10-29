import React, { useState } from 'react';
import ViewPlayerInfo from './ViewPlayerInfo'
import './PlayerInfo.css';

const PlayerInfo = (props) => {

    return(
        <div>
            <ViewPlayerInfo data={props.data} team={props.team}/>
        </div>
    )
}

export default PlayerInfo;