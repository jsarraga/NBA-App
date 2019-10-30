import React, { useState, useEffect} from 'react'
import './Team.css';
import axios from 'axios';
import TeamPlayer from '../TeamPlayer/TeamPlayer';
import Login from '../Login/Login';


function Team() {

    const token = localStorage.getItem('token');
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
            <div>
                {/* <p>This is the Portfolio View!</p>
                <input type="text" />
                <button>View All</button>
                <button onClick={e => setUrl(`http://localhost:5000/${token}/myteam/`)}>Submit</button>
                {isError && <h3>Processing Error. Check your console</h3>}
                { isLoading ? (<div>Loading....</div>) : (<div>Loaded</div>)} */}
            </div>


            <div>
                <p>Please Log in to see your team</p>
                {/* <Login />
                <TeamPlayer />
                <Watchlist />  */}
            </div>
        </div>
    )
}

export default Team;