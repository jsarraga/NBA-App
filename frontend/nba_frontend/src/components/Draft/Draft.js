import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex, Box } from 'rebass';
import Players from '../Players/Players';
import ViewWatchlist from './ViewWatchlist';
import './Draft.css';

const Draft = () => {

    const token = sessionStorage.getItem('token');
    // const [value, setValue] token to make turnary operator for drafting team and add/remove button
    const [watchlistData, setWatchlistData] = useState([{name: "none", pos: "none"}]);
    const [url, setUrl] = useState(`http://localhost:5000/${token}/watchlist`)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [nothing, setIsNothing] = useState(' ');

    useEffect( () => {
        const fetchData = async () => {
          setIsLoading(true);
          setIsError(false);
          try {
            const result = await axios(url);
            setWatchlistData(result.data);
            console.log(result.data)
          } catch (error) {
            setIsError(true);
          }
          setIsLoading(false);
        };
        fetchData();
      }, [nothing]);

      console.log(watchlistData)

    const watchlist = (
    <div>{watchlistData.map((data, index) => {
        return <ViewWatchlist
        data = {data}
        key =  {index} />
    })}
    </div>
)

const style = {
    display: 'inline-block', 
    padding: '20px', 
    margin: '10px', 
    border: '1px solid black',
    background: '#eee',
    width: '90%',
}


    return (
        <Flex >
            <div>
                <Players />
            </div>
            <div>
                <div style={style}>Your Team:</div>
                {token && <p>Authentication Error!</p>}
                {watchlist}
            </div>
        </Flex>
    )
}

export default Draft;