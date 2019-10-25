import React from 'react'
import PlayerContainer from '../PlayerContainter/PlayerContainer'
import './Comparison.css';


const compare = () => {
    return(
        <div>
            <p>Compare</p>
            <h2>Player one</h2>
            <PlayerContainer />
            <h2>Player two</h2>
            <PlayerContainer />
        </div>
     
    )
}

export default compare;