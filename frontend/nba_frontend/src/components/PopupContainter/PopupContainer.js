import React, { useState } from 'react'
import axios from 'axios';


let popupStyles = {
    width: '600px',
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

    let popup = (
        <div style={popupStyles}>
            <button style={popupCloseButtonStyles} onClick={props.onClose}>x</button>
            <div>{props.children}</div>
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