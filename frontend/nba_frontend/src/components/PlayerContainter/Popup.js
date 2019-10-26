import React, { Component } from 'react';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import PlayerStats from '../PlayerStats/PlayerStats'
import PopupContainer from './PopupContainer';



class Popup extends Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <div>
                <button onClick={(e) => this.setState({ isOpen: true })}>Open button</button>
                <div>
                    <PopupContainer isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false})}>
                        <PlayerInfo />
                        <PlayerStats />
                    </PopupContainer>
                </div>
            </div>
        )
    }

}

export default Popup;