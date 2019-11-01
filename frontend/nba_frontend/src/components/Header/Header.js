import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Players from '../Players/Players';
import Team from '../Team/Team';
import Draft from '../Draft/Draft';
import Comparison from '../Comparison/Comparison';
import Logo from './img/wings.png';
import './Header.css';


function Header() {

    return(
        <div className="header">
            <img src={Logo} alt="logo" width="70%" padding="30px"/> <br/>
            <topnav className="nav"> 
                <Link type="nav" className="link" to="/Home">Home</Link>
                <Link type="nav" className="link" to="/Players">Players</Link>
                <Link type="nav" className="link" to="/Team">My Team</Link>
                <Link type="nav" className="link" to="/Draft">Draft Team</Link>
                <Link type="nav" className="link" to="/Comparison">Compare Players</Link>
                <input type="text" placeholder="Search Players" />
                <button>Search</button>
            </topnav>
                <Route path='/Home' component={Home} />
                <Route path='/Players' component={Players} />
                <Route path='/Team' component={Team} />
                <Route path='/Draft' component={Draft} />
                <Route path='/Comparison' component={Comparison} />
        </div>
    );
}

export default Header;