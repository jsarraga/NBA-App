import React from 'react'
import Watchlist from '../Watchlist/Watchlist';
import './Team.css';
import TeamPlayer from '../TeamPlayer/TeamPlayer';

function Team() {
    return (
        <div>
            <p>Team Component</p>
            <p>multiple team player compoents in a left column</p>
            <TeamPlayer />
            <Watchlist />
        </div>
    )
}

export default Team;