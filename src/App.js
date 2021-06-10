import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'


import { Home, Cart } from './pages' 
import {Header} from './components';
import { setPizzas } from './redux/actions/pizzas'

function App() {
  const dispatch = useDispatch()
  const {pizza} = useSelector(({pizza, filter}) => ({
    pizza: pizza.items,
    sortBy: filter.sortBy
  }))

    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
        .then(({ data }) =>  { 
          dispatch(setPizzas(data.pizzas));
         });
    
    }, [])
    
  return (
    <div className="wrapper">
      <Header/>
      <Route exact path='/' render={() => <Home items={pizza} />}></Route>
      <Route exact path='/cart' component={Cart}></Route>
      
      
    </div>
  );
}

export default App;
