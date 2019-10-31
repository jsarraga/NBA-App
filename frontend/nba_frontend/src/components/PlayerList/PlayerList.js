import React, { useState } from 'react'
import PlayerInfo from "../PlayerInfo/PlayerInfo"
import PlayerStats from '../PlayerStats/PlayerStats'
import { Flex, Box, Text } from 'rebass';
import PopupContainer from '../PlayerContainter/PopupContainer'
import RadarChart from '../Charts/RadarChart'
import './PlayerList.css';

const PlayerList = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const style = {
        display: 'inline-block', 
        padding: '16px', 
        margin: '8px', 
        border: '1px solid black',
        backgroundcolor: 'white'
    }
    
    return ( 
        <Flex >
            <Box p={1/2} width={2/4} color='black' bg='transparent'>
                <div className='div1' style={style} onClick={(e) => setIsOpen(true)}>
                    <span>Name: {props.data.name}, Age: {props.data.age}, Position: {props.data.pos}, Team: {props.data.tm}</span> 
                    <Text fontSize={[ 1, 1, 10 ]} fontWeight='medium' padding='10px'>
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
                    </Text>
                </div> 
                <PopupContainer isOpen={isOpen} data={props.data} onClose={(e) => setIsOpen(false)}>
                    <PlayerInfo data={props.data} team={props.data.tm}/>
                    <PlayerStats data={props.data}/>
                    <RadarChart data={props.data}/>
                </PopupContainer>
            </Box>
        </Flex>
    )
}

export default PlayerList;