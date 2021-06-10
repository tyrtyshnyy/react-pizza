import { combineReducers } from 'redux'

import filterReducers from './filters'
import pizzaReducers from './pizzas'

const rootReducers = combineReducers({
    pizza: pizzaReducers,
    filter: filterReducers
})

export default rootReducers;