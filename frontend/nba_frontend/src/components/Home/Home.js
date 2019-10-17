import React from 'react';
import News from '../News/News';
import Watchlist from '../Watchlist/Watchlist';
import './Home.css'

function Home() {
    return (
        <div>
            <p>Homepage</p>
            <News />
            <Watchlist />
        </div>
    )
}

export default Home;