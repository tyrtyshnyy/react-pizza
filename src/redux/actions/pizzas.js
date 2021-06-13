import axios from 'axios';



export const setIsLoaded = (canIndex) => ({
    type: 'SET_IS_LOADED',
    payload: canIndex
})

export const fetchPizzas = ({sortBy, category}) =>  (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false
    });
      
    axios
        .get(`http://localhost:3002/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${
            sortBy.type
          }&_order=${sortBy.order}`)
        .then(({ data }) => {
        dispatch(setPizzas(data));
    });

}


export const setPizzas = (items) => ({
    type: 'SET_ITEMS',
    payload: items
})