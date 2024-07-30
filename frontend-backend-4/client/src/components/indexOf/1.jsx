import React, { useState } from 'react'

const IndexOf = () => {
    const [items, setItems] = useState(['item1', 'item2', 'item3']);

    const handleFindIndex = (item) => {
        const index = items.indexOf(item)
        setItems(index)
        console.log('indexof',index);
      };
  return (
    <div>
 <button onClick={() => handleFindIndex('item2')}>Find Index of 'item2'</button>
 <br />
 {items}
    </div>
  )
}

export default IndexOf