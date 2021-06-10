
const initialState = {
    items: [], 
    isLoaded: false
}

function pizzas(state = initialState, action) {
    switch (action.type) {
      case 'SET_ITEMS':
        return {
            ...state, 
            items: action.payload
        }
      case 'SET_IS_LOADED':
        return {
            ...state,
            isLoaded: action.payload
        }
      default:
        return state
    }
  }

export default pizzas