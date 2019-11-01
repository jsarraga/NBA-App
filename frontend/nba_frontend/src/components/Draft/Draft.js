import React from 'react';
import Login from '../Login/Login';
import Players from '../Players/Players';
import './Draft.css';

const draft = () => {
    return (
        <div>
            <Players />
            <span>Team list on the right</span>
            {/* <Login /> */}
        </div>
    )
}

export default draft;