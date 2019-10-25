import React from 'react'
import Watchlist from '../Watchlist/Watchlist';
import './Team.css';
import TeamPlayer from '../TeamPlayer/TeamPlayer';
// import Popup from './components/PopupTest';

function Team() {
    return (
        <div>
            {/* <Popup>
                this is a popup
            </Popup>
            <p>Team Component</p> */}
            <p>multiple team player compoents in a left column</p>
            <TeamPlayer />
            <Watchlist />
        </div>
    )
}

export default Team;