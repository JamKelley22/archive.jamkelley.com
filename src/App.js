import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
//import Particles from 'react-particles-js';
import Contentful from 'contentful';

import './App.css';

import Home from './components/Home/home.js';
import Blog from './components/Blog/blog.js';
import About from './components/About/about.js';
import Skills from './components/Skills/skills.js';
import Work from './components/Work/work.js';
import Contact from './components/Contact/contact.js';
import Resume from './components/Resume/resume.js';
import Sidebar from './components/Nav/sidebar.js'

import * as routes from './constants/routes';
import Notifications, {notify} from 'react-notify-toast';
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
      <Notifications />
      <div id='sidebar'>
        <Sidebar/>
      </div>

      <div id='content'>
        <div id='center'>
          <Route exact path={routes.HOME} component={() => <Home/>} />
          <Route exact path={routes.CONTACT} component={() => <Contact/>} />
        </div>
        <Route exact path={routes.BLOG} component={() => <Blog/>} />
        <Route exact path={routes.ABOUT} component={() => <About/>} />
        <Route exact path={routes.SKILLS} component={() => <Skills/>} />
        <Route exact path={routes.WORK} component={() => <Work/>} />
        <Route exact path={routes.RESUME} component={() => <Resume/>} />
      </div>

    </div>
  </Router>


export default App;
