import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Players.css';
import { Flex, Box } from 'rebass';
import PlayerList from '../PlayerList/PlayerList';

const Players = () => {

    const [playerData, setPlayerData] = useState([{name: "none", age:0, pos: "none"}]);
    const [stat, setStat] = useState('pts');
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    
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

    useEffect( () => {
        const fetchData = async () => {
          setIsLoading(true);
          setIsError(false);
          try {
            const result = await axios(`http://localhost:5000/all_players/${stat}`);
            setPlayerData(result.data);
            console.log(result.data)
          } catch (error) {
            setIsError(true);
          }
          setIsLoading(false);
        };
        fetchData();
      }, [stat]);

    const showPlayers = (
        <div>{playerData.map((data, index) => {
            return <PlayerList
            data = {data}
            key =  {index} />
        })}
        </div>
    )

    return(
        <Flex>
            <Box>
                <div className="players">
                    <button onClick={e => {setStat("pts")}}>Pts</button>
                    <button onClick={e => {setStat("tpm")}}>3PM</button>
                    <button onClick={e => {setStat("reb")}}>Reb</button>
                    <button onClick={e => {setStat("ast")}}>Ast</button>
                    <button onClick={e => {setStat("stl")}}>Stl</button>
                    <button onClick={e => {setStat("blk")}}>Blk</button>
                    <button onClick={e => {setStat("fgp")}}>Fg%</button>
                    <button onClick={e => {setStat("ftp")}}>Ft%</button>
                    <button onClick={e => {setStat("tov")}}>TO</button>
                    <button onClick={e => {setStat("g")}}>Gm</button>
                    <button onClick={e => {setStat("gs")}}>Gs</button>
                    <button onClick={e => {setStat("mp")}}>Mins</button>
                    {showPlayers} 
                </div>
            </Box>
            
        </Flex>
    )
}

export default Players;