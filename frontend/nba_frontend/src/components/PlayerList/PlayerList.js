import React, { useState } from 'react'
import './PlayerList.css';

const PlayerList = (props) => {
    const style = {
        display: 'inline-block', 
        padding: '16px', 
        // textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
    }
    

    return ( 
        <div style={style}>
            <span>Name:{props.name}, Age:{props.age}, Position:{props.pos}, Team:{props.tm}</span> 
            <p>Points:{props.pts}, 3 Pointers Made:{props.tpm}, Rebounds:{props.reb}, Assists:{props.ast}, Steals:{props.stl}, 
            Blocks:{props.blk}, FG%:{props.fgp}, FT%:{props.ftp}, Turnovers:{props.tov}, Games:{props.g}, 
            Games Started:{props.gs}, Minutes:{props.mp}</p>
        </div> 
    )
}

export default PlayerList;