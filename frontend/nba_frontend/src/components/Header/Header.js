import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Players from '../Players/players';
import Team from '../Team/team';
import Draft from '../Draft/Draft';
import Comparison from '../Comparison/comparison';
import Logo from './img/MJ.jpg';
import './Header.css';


function Header() {

    return(
        <div className="Header">
            <img src={Logo} alt="logo" width="65%"/> <br/>
            <topnav className="nav"> 
                <Link type="nav" className="link" to="/Home">Home</Link>
                <Link type="nav" className="link" to="/Players">Players</Link>
                <Link type="nav" className="link" to="/Team">My Team</Link>
                <Link type="nav" className="link" to="/Draft">Draft Team</Link>
                <Link type="nav" className="link" to="/Comparison">Compare Players</Link>
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