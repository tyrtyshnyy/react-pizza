import React, {useEffect} from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'


import { Home, Cart } from './pages' 
import {Header} from './components';
import { setPizzas } from './redux/actions/pizzas'

function App() {
  const dispatch = useDispatch()

    useEffect(() => {
      axios.get('http://localhost:3001/pizzas')
      .then(({ data }) =>  { 
        dispatch(setPizzas(data));
       });
    
    }, [])
    
  return (
    <div className="wrapper">
      <Header/>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/cart' component={Cart}></Route>
      
      
    </div>
  );
}

export default App;
