import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './TeamPlayer.css';
import ViewTeamPlayer from './ViewTeamPlayer';


const TeamPlayer = (props) => {

    const token = props.token

    const [teamData, setTeamData] = useState([{name: "none", pos: "none"}]);
    const [url, setUrl] = useState(`http://localhost:5000/${token}/myteam`)
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [nothing, setIsNothing] = useState('');

    // easier way to have a useEffect with a 'nothing' listener? Need it just to automatically fetchdata from url upon pageload
    // let plyers = fetchdata

    useEffect( () => {
        const fetchData = async () => {
          setIsLoading(true);
          setIsError(false);
          try {
            const result = await axios(url);
            setTeamData(result.data);
            console.log(result.data)
          } catch (error) {
            setIsError(true);
          }
          setIsLoading(false);
        };
        fetchData();
      }, [nothing]);


    const myteam =(
    <div>{teamData.map((data, index) => {
        return <ViewTeamPlayer
            name = {data.name}
            pos = {data.pos}
            key = {index} />
    })}
    </div>
    )


    return (
      <div >
          {isLoading ? (<div>Loading...</div>) : (<div>{myteam}</div>)}
          {/* <RadarChart data={playerData} /> */}
      </div>
    )
}

export default TeamPlayer;

