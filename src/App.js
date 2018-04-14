import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Particles from 'react-particles-js';
import Contentful from 'contentful';

import './App.css';

import Home from './components/Home/home.js';
import About from './components/About/about.js';
import Skills from './components/Skills/skills.js';
import Work from './components/Work/work.js';
import Contact from './components/Contact/contact.js';
import Resume from './components/Resume/resume.js';
import Sidebar from './components/Nav/sidebar.js'

import * as routes from './constants/routes';
//import withAuthentication from './withAuthentication';

/*
var client = Contentful.createClient({
  space: '<space_id>',
  accessToken: '<access_token>'
});
*/

const App = () =>
  <Router>
    <div className='container'>
      <div id='sidebar' className='pullForward'>
        <Sidebar/>
      </div>

      <div id='content'>
        <div id='particles'>
          <Particles
              params={{
                particles: {
                  move: {
                    enable: true,
                    speed: 2
                  }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: true,
                      mode: "grab"
                    }
                  }
                }
              }}
            />
        </div>
        <div id='center' className='pullForward'>
          <Route exact path={routes.HOME} component={() => <Home/>} />
          <Route exact path={routes.ABOUT} component={() => <About/>} />
          <Route exact path={routes.SKILLS} component={() => <Skills/>} />
          <Route exact path={routes.WORK} component={() => <Work/>} />
          <Route exact path={routes.CONTACT} component={() => <Contact/>} />
          <Route exact path={routes.RESUME} component={() => <Resume/>} />
        </div>
      </div>

    </div>
  </Router>


export default App;
