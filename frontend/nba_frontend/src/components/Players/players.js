import React from 'react'
import './Players.css';
import PlayerList from '../PlayerList/PlayerList';

const players = () => {
    return(
        <div>
            <p>Players</p>
            <PlayerList />  
        </div>
    
    )
}

export default players;