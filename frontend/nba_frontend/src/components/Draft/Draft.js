import React from 'react';
import Players from '../Players/Players';
import PlayerContainer from '../PlayerContainter/PlayerContainer';
import './Draft.css';

const draft = () => {
    return (
        <div>
            <p>Draft</p>
            <span> PLAYER LIST IN LEFT COLUMN</span>
            <Players />
            <span>NEED TP BUILD LISTENER TO RENDER INFO/STATS IN CONTAINTER WHEN CLICKED FROM PLAYERLIST</span>
            <PlayerContainer />
        </div>
    )
}

export default draft;