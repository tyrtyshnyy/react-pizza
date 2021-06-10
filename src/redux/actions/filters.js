const setCategory = (items) => ({
    type: 'SET_SORT_BY',
    payload: items
})

const setSortBy = (canIndex) => ({
    type: 'SET_CATEGORY',
    payload: canIndex
})