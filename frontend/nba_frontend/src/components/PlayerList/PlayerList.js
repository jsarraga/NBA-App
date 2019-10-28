import React, { useState } from 'react'
import PlayerInfo from "../PlayerInfo/PlayerInfo"
import PlayerStats from '../PlayerStats/PlayerStats'
import PopupContainer from '../PlayerContainter/PopupContainer'
import Popup from '../PlayerContainter/Popup';
import './PlayerList.css';

const PlayerList = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const style = {
        display: 'inline-block', 
        padding: '16px', 
        margin: '16px', 
        border: '1px solid black'
    }

    return ( 
        <div>
            <div style={style} onClick={(e) => setIsOpen(true)}>
                <span>Name:{props.data.name}, Age:{props.data.age}, Position:{props.data.pos}, Team:{props.data.tm}</span> 
                <p>Points:{props.data.pts}, 3 Pointers Made:{props.data.tpm}, Rebounds:{props.data.reb}, Assists:{props.data.ast}, Steals:{props.data.stl}, 
                Blocks:{props.data.blk}, FG%:{props.data.fgp}, FT%:{props.data.ftp}, Turnovers:{props.data.tov}, Games:{props.data.g}, 
                Games Started:{props.data.gs}, Minutes:{props.data.mp}</p>
            </div> 
            <div>
                <PopupContainer isOpen={isOpen} onClose={(e) => setIsOpen(false)}>
                    <PlayerInfo data={props.data}/>
                    <PlayerStats data={props.data}/>
                </PopupContainer>
            </div>
        </div>
    )
}

export default PlayerList;