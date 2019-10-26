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
            <span>Team list on the right</span>
            
        </div>
    )
}

export default draft;