import React from 'react';
import News from '../News/News';
import Watchlist from '../Watchlist/Watchlist';
import PlayerUpdate from '../PlayerUpdate/PlayerUpdate'
import './Home.css'

function Home() {

    return (
        <div className="column">
            <div className="feed" >
                <p>Homepage</p>
                <News />
                <Watchlist />
                <p>multiple player update components in right column</p>
                <PlayerUpdate />
            </div>
        </div>
    )
}

export default Home;