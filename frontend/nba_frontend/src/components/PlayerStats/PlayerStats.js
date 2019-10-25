import React, { useState } from 'react';
import axios from 'axios';
import ViewPlayerStats from '../ViewPlayerStats/ViewPlayerStats'
import './PlayerStats.css';

const PlayerStats = () => {

    const [firstname, setFirstname] = useState('Stephen')
    const [lastname, setLastname] = useState('Curry')
    const [playerStatsData, setPlayerStatsData] = useState([{pts:0, ast: 0, reb:0, fgp:0, 
                                                            ftp:0, g:0, gs:0, mp:0, reb:0, stl:0, 
                                                            tov:0, tpm:0, }]);
    const [isLoading, setIsLoading] = useState(true);

    const getPlayerStats = () => {
        const sendPlayerStats = async () => {
            setIsLoading(true);
            try {
                const res = await axios(`http://localhost:5000/Stephen/Curry/recent_stats`) // change to template string firstname, lastname -> gets from clicking on component in player list
                if (res.data) {
                    console.log(res.data)
                    setPlayerStatsData(res.data)
                }
            }
            catch(error) {
                console.error(error)
            }
        }
        sendPlayerStats();
    }

    const showPlayerStats = (
        <div>{playerStatsData.map((data, index) => {
            return <ViewPlayerStats
            pts = {data.pts}
            tpm = {data.tpm}
            reb = {data.reb}
            ast = {data.ast}
            stl = {data.stl}
            blk = {data.blk}
            fgp = {data.fgp}
            ftp = {data.ftp}
            tov = {data.tov}
            g = {data.g}
            gs = {data.gs}
            mp = {data.mp}
            key =  {index} />
        })}
        </div>
    )

    return(
        <div>
            <p>Stats</p>
            <button onClick={e => {getPlayerStats()}}>See Stats </button>
            {showPlayerStats}  
        </div>
    )
}

export default PlayerStats;