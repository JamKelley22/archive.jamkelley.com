import React from 'react';
import { NavLink } from 'react-router-dom';

import * as routes from '../../constants/routes.js';

import './sidebar.css';

import Ebet from '../../Images/ebet.png';

class Sidebar extends React.Component {
  render() {
    return (
      <div id='allItems'>
        <div id='top'>
          <img id='ebetPic' alt="Black Elephant Logo" src={Ebet}/>
        </div>
        <div id='icons'>
          <NavLink id='link' activeClassName='is-active' exact={true} to={routes.HOME}>
            <i id='icon' className="fas fa-home"/>
            <p id='hoverInfo'>Home</p>
          </NavLink>

          <NavLink id='link' activeClassName='is-active' to={routes.ABOUT}>
            <i id='icon' className="fas fa-user"/>
            <p id='hoverInfo'>About</p>
          </NavLink>

          <NavLink id='link' activeClassName='is-active' to={routes.SKILLS}>
            <i id='icon' className="fas fa-cog"/>
            <p id='hoverInfo'>Skills</p>
          </NavLink>

          <NavLink id='link' activeClassName='is-active' to={routes.WORK}>
            <i id='icon' className="fas fa-eye"/>
            <p id='hoverInfo'>Work</p>
          </NavLink>

          <NavLink id='link' activeClassName='is-active' to={routes.CONTACT}>
            <i id='icon' className="fas fa-envelope"/>
            <p id='hoverInfo'>Contact Me</p>
          </NavLink>

          <NavLink id='link' activeClassName='is-active' to={routes.RESUME}>
            <i id='icon' className="fas fa-file-alt"/>
            <p id='hoverInfo'>Resume</p>
          </NavLink>
        </div>
        <div id='media'>
          <a href='https://github.com/JamKelley22'><i id='mediaIcon' className="fab fa-github"/></a>
          <a href='https://www.linkedin.com/in/jamkelley22/'><i id='mediaIcon' className="fab fa-linkedin"/></a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
