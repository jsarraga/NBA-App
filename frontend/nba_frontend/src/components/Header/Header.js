import React, { Fragment  } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import Players from '../Players/Players';
import { Flex } from 'rebass';
import Team from '../Team/Team';
import Draft from '../Draft/Draft';
import Comparison from '../Comparison/Comparison';
import Logo from './img/wings.png';
import Logo1 from './img/fbfinesse.png';
import './Header.css';


function header() {

    return(
        <Fragment px={5} className="header"> 
            <img src={Logo} alt="logo" width="70%" padding="30px"/> <br/>
            <div px={3} color='white' background='#6B6E70' alignItems= 'flex-end'>
                <topnav className="nav" > 
                    <Link variant='nav' type="nav" className="link" to="/Home">Home</Link>
                    <Link type="nav" className="link" to="/Players">Players</Link>
                    <Link type="nav" className="link" to="/Team">My Team</Link>
                    <Link type="nav" className="link" to="/Draft">Draft Team</Link>
                    <Link type="nav" className="link" to="/Comparison">Compare Players</Link>
                </topnav>
            </div>
                    <Route path='/Home' component={Home} />
                    <Route path='/Players' component={Players} />
                    <Route path='/Team' component={Team} />
                    <Route path='/Draft' component={Draft} />
                    <Route path='/Comparison' component={Comparison} />
        </Fragment>
    );
}

export default header;