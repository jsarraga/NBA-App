import React from 'react'

const ViewPlayerStats = (props) => {

    const style = {
        display: 'inline-block', 
        padding: '16px', 
        // textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
    }


    return (
        <div style={style}>
            <p>Points:{props.data.pts}, 3 Pointers Made:{props.data.tpm}, Rebounds:{props.data.reb}, Assists:{props.data.ast}, Steals:{props.data.stl}, 
            Blocks:{props.data.blk}, FG%:{props.data.fgp}, FT%:{props.data.ftp}, Turnovers:{props.data.tov}, Games:{props.data.g}, 
            Games Started:{props.data.gs}, Minutes:{props.data.mp}</p>
        </div> 
    )
}


export default ViewPlayerStats;