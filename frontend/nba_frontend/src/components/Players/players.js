import React, { useState } from 'react'
import axios from 'axios'
import './Players.css';
import PlayerList from '../PlayerList/PlayerList';
import Popup from '../PlayerContainter/Popup'

const Players = () => {

    const [playerData, setPlayerData] = useState([{name: "none", age:0, pos: "none"}]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getPlayers = () => {
        const sendPlayers = async () => {
            setIsLoading(true);
            try{
                const res = await axios('http://localhost:5000/all_players')
                if (res.data) {
                    console.log(res.data)
                    setPlayerData(res.data)
                }
            }
            catch(error) {
                console.error(error)
            }
        }
        sendPlayers();
    }

    const showPlayers = (
        <div>{playerData.map((data, index) => {
            return <PlayerList
            name = {data.name}
            age = {data.age}
            pos = {data.pos}
            tm = {data.tm}
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
        <div className="leftcolumn">
            <p>Players</p>
            <button onClick={e => {getPlayers()}}>See all Players</button>
            {showPlayers} 
        </div>
    
    )
}

export default Players;