import React, { useState } from 'react'

const StateManagement = () => {
    const [items,setItems] = useState(['item 1','item 2']);

    const addItem = () => {
        setItems(prevItem => [...prevItem,`Items ${prevItem.length + 1}`])
    }
  return (
    <div>
        <ul>
            {items.map((val,index) => (
                <li key={index}>{val}</li>
            ))}
        </ul>
        <button onClick={addItem}>Click to add</button>
    </div>
  )
}

export default StateManagement