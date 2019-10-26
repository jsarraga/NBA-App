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
                <span>Name:{props.name}, Age:{props.age}, Position:{props.pos}, Team:{props.tm}</span> 
                <p>Points:{props.pts}, 3 Pointers Made:{props.tpm}, Rebounds:{props.reb}, Assists:{props.ast}, Steals:{props.stl}, 
                Blocks:{props.blk}, FG%:{props.fgp}, FT%:{props.ftp}, Turnovers:{props.tov}, Games:{props.g}, 
                Games Started:{props.gs}, Minutes:{props.mp}</p>
            </div> 
            <div>
                <PopupContainer isOpen={isOpen} onClose={(e) => setIsOpen(false)}>
                    <PlayerInfo />
                    <PlayerStats />
                </PopupContainer>
            </div>
        </div>
    )
}

export default PlayerList;