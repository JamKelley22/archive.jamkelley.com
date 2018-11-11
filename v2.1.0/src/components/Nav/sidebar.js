import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as routes from '../../constants/routes.js';

import './sidebar.css';

import Ebet from '../../Images/ebet.png';

class Sidebar extends React.Component {
  state = {
    socialMediaVisible: false
  }

  handleSocialMediaButtnClick = target => {
    window.open(target,'_blank');
  }

  toggleSocialMediaVisible = (e) => {
    e.preventDefault();
    this.setState({
      socialMediaVisible: !this.state.socialMediaVisible
    })
  }

  render() {
    return (
      <div id='allItems'>
        <div id='top'>
          <NavLink id='link' activeClassName='is-active' exact={true} to={routes.HOME}>
            <img id='ebetPic' alt="Black Elephant Logo" src={Ebet}/>
          </NavLink>
        </div>
        <div id='icons'>
          <NavLink id='link' activeClassName='is-active' exact={true} to={routes.HOME}>
            <FontAwesomeIcon id='icon' icon="home" />
            <p id='hoverInfo'>Home</p>
          </NavLink>
          {/*
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
          */}

          <NavLink id='link' activeClassName='is-active' to={routes.BLOG}>
            <FontAwesomeIcon id='icon' icon="clock" />
            <p id='hoverInfo'>Blog</p>
          </NavLink>

          <NavLink id='link' activeClassName='is-active' to={routes.PROJECTS}>
            <FontAwesomeIcon id='icon' icon="project-diagram" />
            <p id='hoverInfo'>Projects</p>
          </NavLink>

          <NavLink id='link' activeClassName='is-active' to={routes.CONTACT}>
            <FontAwesomeIcon id='icon' icon="envelope" />
            <p id='hoverInfo'>Contact Me</p>
          </NavLink>

          <NavLink id='link' activeClassName='is-active' to={routes.RESUME}>
            <FontAwesomeIcon id='icon' icon="file-alt" />
            <p id='hoverInfo'>Resume</p>
          </NavLink>

          <a className='devTo' href="https://dev.to/jamkelley22">
            <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Jameel Kelley's DEV Profile"/>
          </a>

        </div>
        <div id='elipses'>
          <button id='elipsesLink' onClick={(e) => this.toggleSocialMediaVisible(e)}>
            <i id='mediaIcon' className="fas fa-ellipsis-h"/>
          </button>
        </div>
        {
          this.state.socialMediaVisible &&
          <div className='circle' id='circle'>
            <div onClick={() => this.handleSocialMediaButtnClick("https://github.com/JamKelley22")}><i id='icon0' className="fab fa-github circleIcon"/></div>
            <div onClick={() => this.handleSocialMediaButtnClick("https://www.linkedin.com/in/jamkelley22/")}><i id='icon45' className="fab fa-linkedin circleIcon"/></div>
            <div onClick={() => this.handleSocialMediaButtnClick("https://stackoverflow.com/users/7732931/jameel-kelley")}><i id='iconN45' className="fab fa-stack-overflow circleIcon"/></div>
          </div>
        }
        {
          !this.state.socialMediaVisible &&
          <div className='circle' id='circle'>
            <div onClick={() => this.handleSocialMediaButtnClick("https://github.com/JamKelley22")}><i id='icon0' className="fab fa-github circleIcon"/></div>
            <div onClick={() => this.handleSocialMediaButtnClick("https://www.linkedin.com/in/jamkelley22/")}><i id='icon45' className="fab fa-linkedin circleIcon"/></div>
            <div onClick={() => this.handleSocialMediaButtnClick("https://stackoverflow.com/users/7732931/jameel-kelley")}><i id='iconN45' className="fab fa-stack-overflow circleIcon"/></div>
          </div>
        }
      </div>
    );
  }
}

export default Sidebar;
