import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import '../stylesheet/App.scss';
import Contact from './Contact';
import Home from './Home';
import ProjectsList from './ProjectsList';

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/projects' component={ProjectsList} />
      </Switch>
    </div>
  );
}

export default App;
