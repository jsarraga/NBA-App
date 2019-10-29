import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PlayerStats from '../PlayerStats/PlayerStats';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import RadarChart from '../Charts/RadarChart'


function PlayerContainer() {
    const [firstname, setFirstname] = useState('Stephen')
    const [lastname, setLastname] = useState('Curry')
    const [infoUrl, setInfoUrl] = useState('http://localhost:5000/Stephen/Curry/info')
    const [statsUrl, setStatsUrl] = useState('`http://localhost:5000/Stephen/Curry/recent_stats`')
    const [playerInfoData, setPlayerInfoData] = useState({name: "Stephen Curry", age:30, pos:"PG", tm:"GSW" });
    const [playerStatsData, setPlayerStatsData] = useState({tm: "GSW", pts:0, ast: 0, reb:0, fgp:0, 
        ftp:0, g:0, gs:0, mp:0, reb:0, stl:0, 
        tov:0, tpm:0, blk:0 });
    const [isLoading, setIsLoading] = useState(true);


    useEffect( () => {
        const sendPlayerInfo = async () => {
            setIsLoading(true);
            try {
                const res = await axios(infoUrl) 
                if (res.data) {
                    console.log(res.data)
                    setPlayerInfoData(res.data)
                }
            }
            catch(error) {
                console.error(error)
            }
        }
        sendPlayerInfo();
    }, [infoUrl])


    useEffect( () => {
        const sendPlayerStats = async () => {
            setIsLoading(true);
            try {
                const res = await axios(statsUrl) 
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
    }, [statsUrl])


    const style = {
        display: 'inline-block', 
        padding: '16px',  
        margin: '16px', 
        border: '1px solid black'
    }
    
    

    return (
        <div style={style}>
            <div>
                <input type ="text" id="firstname"  placeholder="First Name" onChange= {(e) => {setFirstname(e.target.value)}} />
                <input type="text" id="laststname" placeholder="Last Name" onChange= {(e) => {setLastname(e.target.value)}} />
                <button type="submit" onClick={(e) => {setInfoUrl(`http://localhost:5000/${firstname}/${lastname}/info`); 
                                                        setStatsUrl(`http://localhost:5000/${firstname}/${lastname}/recent_stats`)}}>Submit</button>
            </div>  
            <div>
                <PlayerInfo data={playerInfoData} team={playerStatsData.tm}/>
                <PlayerStats data={playerStatsData} />
                {/* <RadarChart data={playerStatsData} /> */}
                <div>{console.log(playerStatsData)}</div>
            </div>
        </div>
    )
}

export default PlayerContainer;