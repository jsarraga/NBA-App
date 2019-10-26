import React, { useState } from 'react';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import PlayerStats from '../PlayerStats/PlayerStats'
import PopupContainer from './PopupContainer';


const Popup = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button onClick={(e) => setIsOpen(true)}>Open button</button>
            <div>
                <PopupContainer isOpen={isOpen} onClose={(e) => setIsOpen(false)}>
                    <PlayerInfo />
                    <PlayerStats />
                </PopupContainer>
            </div>
        </div>
    )
}

export default Popup;