import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import PlayerStats from '../PlayerStats/PlayerStats';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import { Flex, Box, Button } from 'rebass';
import { Input } from '@rebass/forms';
import BarChart from './BarChart';



function PlayerContainer() {
    const [firstname, setFirstname] = useState('Stephen');
    const [firstname2, setFirstname2] = useState('Stephen');
    const [lastname, setLastname] = useState('Curry');
    const [lastname2, setLastname2] = useState('Curry');
    const [infoUrl, setInfoUrl] = useState('http://localhost:5000/Stephen/Curry/info');
    const [infoUrl2, setInfoUrl2] = useState('http://localhost:5000/Stephen/Curry/info');
    const [statsUrl, setStatsUrl] = useState('`http://localhost:5000/Stephen/Curry/recent_stats`');
    const [statsUrl2, setStatsUrl2] = useState('`http://localhost:5000/Stephen/Curry/recent_stats`');
    const [playerInfoData, setPlayerInfoData] = useState({name: "Stephen Curry", age:30, pos:"PG", tm:"GSW" });
    const [playerInfoData2, setPlayerInfoData2] = useState({name: "Stephen Curry", age:30, pos:"PG", tm:"GSW" });
    const [playerStatsData, setPlayerStatsData] = useState({tm: "GSW", pts:0, ast: 0, reb:0, fgp:0, 
        ftp:0, g:0, gs:0, mp:0, reb:0, stl:0, 
        tov:0, tpm:0, blk:0 });
    const [playerStatsData2, setPlayerStatsData2] = useState({tm: "GSW", pts:0, ast: 0, reb:0, fgp:0, 
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
        const sendPlayer2Info = async () => {
            setIsLoading(true);
            try {
                const res = await axios(infoUrl2) 
                if (res.data) {
                    console.log(res.data)
                    setPlayerInfoData2(res.data)
                }
            }
            catch(error) {
                console.error(error)
            }
        }
        sendPlayer2Info();
    }, [infoUrl2])


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

    useEffect( () => {
        const sendPlayer2Stats = async () => {
            setIsLoading(true);
            try {
                const res = await axios(statsUrl2) 
                if (res.data) {
                    console.log(res.data)
                    setPlayerStatsData2(res.data)
                }
            }
            catch(error) {
                console.error(error)
            }
        }
        sendPlayer2Stats();
    }, [statsUrl2])


    const style = {
        display: 'inline-block', 
        padding: '16px',  
        margin: '16px', 
        border: '1px solid black',
        align: 'center', 
        background: '#eee'
    }

    const style2 = {
        padding: '16px',  
        margin: '16px', 
        border: '1px solid black',
        background: '#eee'
    }

    return (
        <div>
            <Flex px={20} mx={-2}>
                <Box px={2} width={1/2} style={style}>
                    <input type ="text" id="firstname"  placeholder="First Name" onChange= {(e) => {setFirstname(e.target.value)}} />
                    <input type="text" id="laststname" placeholder="Last Name" onChange= {(e) => {setLastname(e.target.value)}} />
                    <button type="submit" onClick={(e) => {setInfoUrl(`http://localhost:5000/${firstname}/${lastname}/info`); 
                                                            setStatsUrl(`http://localhost:5000/${firstname}/${lastname}/recent_stats`)}}>Submit</button>
                    <PlayerInfo data={playerInfoData} team={playerStatsData.tm}/>
                    <PlayerStats data={playerStatsData} />
                </Box>

                <Box px={2} width={1/2} style={style} >
                    <input type ="text" id="firstname2"  placeholder="First Name" onChange= {(e) => {setFirstname2(e.target.value)}} />
                    <input type="text" id="laststname2" placeholder="Last Name" onChange= {(e) => {setLastname2(e.target.value)}} />
                    <button type="submit" onClick={(e) => {setInfoUrl2(`http://localhost:5000/${firstname2}/${lastname2}/info`); 
                                                            setStatsUrl2(`http://localhost:5000/${firstname2}/${lastname2}/recent_stats`)}}>Submit</button>
                    <PlayerInfo data={playerInfoData2} team={playerStatsData2.tm}/>
                    <PlayerStats data={playerStatsData2} />
                </Box> 
            </Flex>
        
            <Box px={20} style={style2}>
                <BarChart data={playerStatsData} otherData={playerStatsData2} name1={playerInfoData.name} name2={playerInfoData2.name} />
            </Box>
        </div>
    )
}

export default PlayerContainer;