import React, { useState } from 'react'
import axios from 'axios';


let popupStyles = {
    width: '450px',
    maxWidth: '75%',
    height: '500px',
    margin: '0 auto',
    position: 'fixed',
    left: '75%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 10px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let popupCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};

const PopupContainer = (props) => {
    const token = sessionStorage.getItem('token');

    const draftPlayer = () => {
        const sendPlayer = async () => {
            let name = props.data.name.split(" ")
            let firstname = name[0]
            let lastname = name[1]
            console.log(firstname, lastname)
            setIsLoading(true);
            try{
                const res = await axios(`http://localhost:5000/${token}/addtoteam/${firstname}/${lastname}`)
                if (res.data) {
                    console.log(res.data)
                    setPlayerData(res.data)
                }
            }
            catch(error) {
                console.error(error)
            }
        }
        sendPlayer();
    }

    let popup = (
        <div style={popupStyles}>
            <button style={popupCloseButtonStyles} onClick={props.onClose}>x</button>
            <div>{props.children}</div>
            <button onClick={e => {draftPlayer()}}>Add to Team</button>
        </div>
    )

    if(! props.isOpen) {
        popup = null;
    }
    return (
        <div>
            {popup}
        </div>
    )
}

export default PopupContainer;