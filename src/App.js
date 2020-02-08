import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'



import Nav from './components/nav';
import Home from './components/home';
import Skills from './components/skills';
import Projects from './components/projects';
import Resume from './components/resume';
import Contact from './components/contact';

library.add(fab)

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path='/skills' component={Skills} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
        <Route path='/' component={Home} />
      </Switch>

    </div>
  )
}

export default App;
