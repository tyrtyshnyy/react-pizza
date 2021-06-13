
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { Categories, ShowPopup, PizzaBlock, LoadingBlock } from '../components/';
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas} from '../redux/actions/pizzas'

const categoryNames = ['Мясные', 'Вегатерианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'}, 
    {name: 'цене', type: 'price', order: 'desc'}, 
    {name:'алфавиту', type: 'alphabet', order: 'asc'}]

function Home() {
    const dispatch = useDispatch()

   
    
    const  items  = useSelector(({pizza}) => pizza.items)
    const  isLoaded  = useSelector(({pizza}) => pizza.isLoaded)

    const  {category, sortBy}  = useSelector(({filter}) => filter)


    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = React.useCallback((index) => {
        dispatch(setSortBy(index))
    }, [])

    React.useEffect(() => {
        dispatch(fetchPizzas({sortBy, category}))
      
      }, [category, sortBy])

    
    
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories 
                        onClickItem={onSelectCategory} 
                        items={categoryNames}  
                        stateActivePizza={category} />
                    <ShowPopup 
                        items={sortItems} 
                        onClickSortType={onSelectSortType}  
                        activeSortType={sortBy.type} />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                   {isLoaded 
                   ? items.map(obj => <PizzaBlock key={obj.id} {...obj} />) 
                    : Array(10).fill(0).map((_,index) => <LoadingBlock key={index} />)}

                </div>
            </div>
        </div>
    )
}

export default Home
