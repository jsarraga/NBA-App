import React, { useState } from 'react';
import axios from 'axios';
import ViewPlayerInfo from '../ViewPlayerInfo/ViewPlayerInfo';
import './PlayerInfo.css';

const PlayerInfo = () => {

    const [firstname, setFirstname] = useState('Stephen')
    const [lastname, setLastname] = useState('Curry')
    const [playerInfoData, setPlayerInfoData] = useState([{name: "Stephen Curry", age:30, pos:"PG", }]);
    const [isLoading, setIsLoading] = useState(true);

    const getPlayerInfo = () => {
        const sendPlayerInfo = async () => {
            setIsLoading(true);
            try {
                const res = await axios(`http://localhost:5000/Stephen/Curry/info`) // change to template string firstname, lastname -> gets from clicking on component in player list
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
    }

    const showPlayerInfo = (
        <div>{playerInfoData.map((data, index) => {
            return <ViewPlayerInfo
            name = {data.name}
            age = {data.age}
            pos = {data.pos}
            key =  {index} />
        })}
        </div>
    )

    return(
        <div>
            <p>Info</p>
            <button onClick={e => {getPlayerInfo()}}>See info</button>
            {showPlayerInfo}  
        </div>
    )
}

export default PlayerInfo;