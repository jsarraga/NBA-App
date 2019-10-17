import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
    return(
        <div className="Header">
            <img>Header logo/image</img>
            <topnav className="nav"> 
                <Link type="nav" to="/Home">Home</Link>
                <Link type="nav" to="/Players">Players</Link>
                <Link type="nav" to="/Team">My Team</Link>
                <Link type="nav" to="/Draft">Draft Team</Link>
                <Link type="nav" to="/Comparison">Compare Players</Link>
            </topnav>
                <Route path='/Root' component={Home} />
                <Route path='/Players' component={Players} />
                <Route path='/Team' component={Team} />
                <Route path='/Draft' component={Draft} />
                <Route path='/Comparison' component={Comparison} />



            





        </div>
    );
}

export default Header;