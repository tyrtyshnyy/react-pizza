
import React from 'react'

const Categories = React.memo(({ items, onClickItem, stateActivePizza }) =>  {
  
  return (
      <div className="categories">
            <ul>
              <li className={stateActivePizza === null ? 'active' : ''} onClick={() => onClickItem(null)}>Все</li>
              {items.map((items, index) =>  <li className={ stateActivePizza === index ?'active' : ''} onClick={() => onClickItem(index)} key={`${items}_${index}`} >{items}</li> )}
            </ul>
          </div>
  )
})

export default Categories