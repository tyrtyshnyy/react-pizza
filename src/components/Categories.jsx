
import React from 'react'

const Categories = React.memo(({ items, onClickItem }) =>  {
  const [state, setState] = React.useState(null)


  const onSelectItem = (num) => {
      setState(num)
      onClickItem(num)
  }
  return (
      <div className="categories">
            <ul>
              <li className={state === null ? 'active' : ''}>Все</li>
              {items.map((items, index) =>  <li className={ state === index ?'active' : ''} onClick={() => onSelectItem(index)} key={`${items}_${index}`} >{items}</li> )}
            </ul>
          </div>
  )
})

export default Categories