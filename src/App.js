import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Nav from './components/nav';
import Home from './components/home';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path='/skills' component={Skills} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route path='/' component={Home} />
      </Switch>

    </div>
  )
}

export default App;
