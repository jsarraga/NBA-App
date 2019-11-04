import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Players.css';
import { Flex, Box, Text } from 'rebass';
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
        <Flex px={30} mx={2}>
            <Box p={1} width={1/2} alignItems= 'center'>
                    <br />
                    <br />
                    <button className="button" onClick={e => {setStat("pts")}}>Pts</button>
                    <button className="button" onClick={e => {setStat("tpm")}}>3PM</button>
                    <button className="button" onClick={e => {setStat("reb")}}>Reb</button>
                    <button className="button" onClick={e => {setStat("ast")}}>Ast</button>
                    <button className="button" onClick={e => {setStat("stl")}}>Stl</button>
                    <button className="button" onClick={e => {setStat("blk")}}>Blk</button>
                    <button className="button" onClick={e => {setStat("fgp")}}>Fg%</button>
                    <button className="button" onClick={e => {setStat("ftp")}}>Ft%</button>
                    <button className="button" onClick={e => {setStat("tov")}}>TO</button>
                    <button className="button" onClick={e => {setStat("g")}}>Gm</button>
                    <button className="button" onClick={e => {setStat("gs")}}>Gs</button>
                    <button className="button" onClick={e => {setStat("mp")}}>Mins</button>
                    {showPlayers} 
            </Box>
        </Flex>
    )
}

export default Players;