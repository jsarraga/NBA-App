import React, { useState } from 'react';
import axios from 'axios';
import ViewPlayerInfo from '../ViewPlayerInfo/ViewPlayerInfo';
import './PlayerInfo.css';

const PlayerInfo = (props) => {

    return(
        <div>
            <p>Info</p>
            <ViewPlayerInfo data={props.data} team={props.team}/>
        </div>
    )
}

export default PlayerInfo;