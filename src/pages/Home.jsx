
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { Categories, ShowPopup, PizzaBlock } from '../components/';
import { setCategory } from '../redux/actions/filters'

const categoryNames = ['Мясные', 'Вегатерианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'popular'}, 
    {name: 'цене', type: 'price'}, 
    {name:'алфавиту', type: 'alphabet'}]

function Home() {
    const  items  = useSelector(({pizza, filter}) => pizza.items)

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const dispatch = useDispatch()

    
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories onClickItem={onSelectCategory} items={categoryNames} />
                    <ShowPopup items={sortItems} />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                   {items && items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}

                </div>
            </div>
        </div>
    )
}

export default Home
