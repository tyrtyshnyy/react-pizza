export const setCategory = (items) => ({
    type: 'SET_CATEGORY',
    payload: items
}) 

export const setSortBy = (canIndex) => ({
    type: 'SET_SORT_BY',
    payload: canIndex
})