import { combineReducers } from 'redux'

import filterReducers from './filters'
import pizzaReducers from './pizzas'
import cartReducers from './cart'

const rootReducers = combineReducers({
    pizza: pizzaReducers,
    filter: filterReducers,
    cart: cartReducers
})

export default rootReducers;