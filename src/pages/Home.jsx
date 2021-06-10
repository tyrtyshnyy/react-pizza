
import React from 'react'

import { Categories, ShowPopup, PizzaBlock } from '../components/';

function Home({ items }) {
    
   
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories onClickItem={(items) => console.log(items)} items={['Мясные', 'Вегатерианская', 'Гриль', 'Острые', 'Закрытые']} />
                    <ShowPopup items={[{name: 'популярности', index: 0}, 
                    {name: 'цене', index: 1}, {name:'алфавиту', index: 2}]} />
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
