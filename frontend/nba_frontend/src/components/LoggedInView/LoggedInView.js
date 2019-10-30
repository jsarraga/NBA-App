import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';


function LoggedInView() {
    const token = sessionStorage.getItem('token');


    return (
        <div>
            <h3>Access Token is: {token}</h3>
        </div>
    )
}

export default LoggedInView;