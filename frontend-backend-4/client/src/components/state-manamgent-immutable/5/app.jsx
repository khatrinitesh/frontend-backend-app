import React, { useState } from 'react'

const StateManagement = () => {
    const [items,setItems] = useState(['items1','items2']);
    const [editIndex,setEditIndex]= useState(null);
    const [inputVal,setInputVal] = useState('');

    const handleAdd = () => {
        setItems((prevItem) => [...prevItem,`Item ${items.length + 1}`])
    }
    const handleChange = (e) => {
        setInputVal(e.target.value)
    }
    const handleEdit  =(index ) => {
        setEditIndex(index);
        setInputVal(items[index]);
    }
    const handleDelete = (index) => {
        setItems((prevItem) => prevItem.filter((_,i) => i !== index))
    }
    const handleSave = () => {
        if(editIndex !== null && inputVal.trim !== ''){
            setItems((prevItem) => prevItem.map((item,index) => index === editIndex ? inputVal : item))
            setEditIndex(null);
            setInputVal('');
        }
    }
  return (
    <div>
        <h2 className='font-bold text-[32px]'>CRUD</h2>
        <input type="text" value={inputVal} onChange={handleChange} />
        {editIndex !== null && <button onClick={handleSave}>Save</button>}
        <ul>
            {items.map((val,index) => (
                <li key={index}>{val}
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default StateManagement