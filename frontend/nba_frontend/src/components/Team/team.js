import React from 'react'
import Watchlist from '../Watchlist/Watchlist';
import './Team.css';
import TeamPlayer from '../TeamPlayer/TeamPlayer';
import Login from '../Login/Login';


function Team() {
    return (
        <div>
            <p>Please Log in to see your team</p>
            <Login />
            <TeamPlayer />
            <Watchlist />
        </div>
    )
}

export default Team;