import React, { useState, useEffect} from 'react'
import './Team.css';
import axios from 'axios';
import TeamPlayers from '../TeamPlayers/TeamPlayers';
import Players from '../Players/Players';
import Login from '../Login/Login';


function Team() {

    const token = sessionStorage.getItem('token');
    const [teamData, setTeamData] = useState('');
    const [url, setUrl] = useState(`http://localhost5000:/${token}/myteam`)
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
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
      }, [url]);


    return (
      <div>
        <Login />
      </div>
    )
}

export default Team;