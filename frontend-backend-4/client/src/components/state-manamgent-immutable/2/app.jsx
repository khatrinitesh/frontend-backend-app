import React, { useState } from 'react'

const StateManagement = () => {
    const [happy,setHappy]  = useState(['happy 1','happy 2']);

    const handleAdd = () => {
        setHappy(prevItem => [...prevItem,`happy ${happy.length + 1}`]);
    }

    const handleDel = (index) => {
        setHappy(prevItem => prevItem.filter((_,i) => i !== index));
    }
  return (
    <div>
        <ul>
            {happy.map((val,index) => (
                <li key={index}>{val} 
                <button onClick={() => handleDel(index)} className='bg-black text-white rounded px-10 py-2'>Delete</button>
                </li>
            ))}
        </ul>
        <button onClick={handleAdd}>Add Item</button>
    </div>
  )
}

export default StateManagement