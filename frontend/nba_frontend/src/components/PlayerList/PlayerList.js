import React, { useState } from 'react'
import PlayerInfo from "../PlayerInfo/PlayerInfo"
import PlayerStats from '../PlayerStats/PlayerStats'
import { Flex, Box, Text } from 'rebass';
import PopupContainer from '../PopupContainter/PopupContainer'
import RadarChart from '../Charts/RadarChart'
import './PlayerList.css';

const PlayerList = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const style = {
        display: 'inline-block', 
        padding: '20px', 
        margin: '5px', 
        border: '1px solid black',
        backgroundcolor: 'white'
    }
    
    return ( 
        <Flex px={2} mx={4}>
            <Box p={1.5} width={1/2} color='black'>
                <div className='div1' style={style} onClick={(e) => setIsOpen(true)}>
                    <Flex px={2} mx={-2}>
                        <Box px={2} width={1/2} >
                            <p>Name: {props.data.name}</p>
                            <p>Age: {props.data.age}</p>
                        </Box>
                        <Box px={2} width={1/2} >
                            <p>Position: {props.data.pos}</p>
                            <p> Team: {props.data.tm}</p>
                        </Box>
                    </Flex>
                    <Text fontSize={[ 1, 1, 2 ]} fontWeight='medium' padding='10px'>
                        <Box>
                        <table>
                            <thead>
                                <tr>
                                    <th>Pts</th>
                                    <th>3pm</th>
                                    <th>Reb</th>
                                    <th>Ast</th>
                                    <th>Stl</th>
                                    <th>Blk</th>
                                    <th>Fg%</th>
                                    <th>Ft%</th>
                                    <th>TO</th>
                                    <th>Gm</th>
                                    <th>Gs</th>
                                    <th>Mins</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{props.data.pts}</td>
                                    <td>{props.data.tpm}</td>
                                    <td>{props.data.reb}</td>
                                    <td>{props.data.ast}</td>
                                    <td>{props.data.stl}</td>
                                    <td>{props.data.blk}</td>
                                    <td>{props.data.fgp}</td>
                                    <td>{props.data.ftp}</td>
                                    <td>{props.data.tov}</td>
                                    <td>{props.data.g}</td>
                                    <td>{props.data.gs}</td>
                                    <td>{props.data.mp}</td>
                                </tr>
                            </tbody>
                        </table> 
                        </Box>
                    </Text>
                </div> 
                </Box>
                <PopupContainer isOpen={isOpen} data={props.data} onClose={(e) => setIsOpen(false)}>
                    <PlayerInfo data={props.data} team={props.data.tm}/>
                    <PlayerStats data={props.data}/>
                    <RadarChart data={props.data}/>
                </PopupContainer>
        </Flex>
    )
}

export default PlayerList;