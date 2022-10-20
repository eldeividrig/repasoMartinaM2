import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { About } from './Components/About';
import { Create } from './Components/Create';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { Users } from './Components/Users';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route path={'/home'} component={Home}/>
      <Route path={'/users'} component={Users}/>
      <Route path={'/create'} component={Create}/>
      <Route path={'/about'} component={About}/>
    </React.Fragment>
  );
}

export default App;
