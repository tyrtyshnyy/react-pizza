export const setPizzas = (items) => ({
    type: 'SET_ITEMS',
    payload: items
})

export const setIsLoaded = (canIndex) => ({
    type: 'SET_IS_LOADED',
    payload: canIndex
})