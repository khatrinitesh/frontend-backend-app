import React, { useState } from 'react'

const IndexOf = () => {
    const [items, setItems] = useState(['item1', 'item2', 'item3']);

    const handleUpdate = (oldItem, newItem) => {
        const index = items.indexOf(oldItem);
        if (index !== -1) {
          const updatedItems = [...items];
          updatedItems[index] = newItem;
          setItems(updatedItems);
        }
      };
  return (
    <div>
         <button onClick={() => handleUpdate('item2', 'updatedItem2')}>Update 'item2' to 'updatedItem2'</button>
         <ul>
            {items.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default IndexOf