import React from 'react'
import PlayerStats from '../PlayerStats/PlayerStats';
import PlayerInfo from '../PlayerInfo/PlayerInfo';

function PlayerContainer() {

    const style = {
        display: 'inline-block', 
        padding: '16px',  
        margin: '16px', 
        border: '1px solid black'
    }

    return (
        <div style={style}>
            <p>This is a player container</p>
            <PlayerInfo />
            <PlayerStats />
            {/* Add a radar graph component */}
        </div>
    )
}

export default PlayerContainer;