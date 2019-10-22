import React, { useState } from 'react'
import axios from 'axios'
import './Players.css';
import PlayerList from '../PlayerList/PlayerList';

const Players = () => {

    const [playerData, setPlayerData] = useState([{name: "none", age:0, pos: "none"}]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getPlayers = () => {
        const sendPLayers = async () => {
            setIsLoading(true);
            try{
                const res = await axios('http://localhost:5000/players')
                if (res.data) {
                    console.log(res.data)
                    setPlayerData(res.data)
                }
            }
            catch(error) {
                console.error(error)
            }
        }
        sendPLayers();
    }

    const showPlayers = (
        <div>{playerData.map((data, index) => {
            return <PlayerList
            name = {data.name}
            age = {data.age}
            pos = {data.pos}
            key =  {index} />
        })}
        </div>
    )


    return(
        <div>
            <p>Players</p>
            <button class="button" onClick={e => {getPlayers()}}>See all Players</button>
            {showPlayers}  
        </div>
    
    )
}

export default Players;