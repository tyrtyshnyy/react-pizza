import React from 'react';
import { Route } from 'react-router-dom'

import { Home, Cart } from './pages' 
import {Header} from './components';


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/cart' component={Cart}></Route>
    </div>
  );
}

export default App;
