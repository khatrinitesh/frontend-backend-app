import React, { useState } from 'react'

const IndexOf = () => {
    const [items, setItems] = useState([
        { id: 111, name: 'Item 1' },
        { id: 112, name: 'Item 2' },
        { id: 113, name: 'Item 3' }
      ]);

      const handleFindIndex =(id) => {
        const index = items.findIndex((item) => item.id === id);
        console.log(index);
      }


  return (
    <div>
        <button onClick={() => handleFindIndex(110)}>find index of Item with ID 2</button>
    </div>
  )
}

export default IndexOf