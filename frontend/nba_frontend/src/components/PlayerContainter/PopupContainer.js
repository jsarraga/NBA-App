import React, { useState } from 'react'


let popupStyles = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
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
            <p>This is a player container</p>
            <button style={popupCloseButtonStyles} onClick={props.onClose}>x</button>
            <div>{props.children}</div>
            {/* Add a radar graph component */}
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