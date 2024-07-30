import React, { useState, useTransition } from 'react'

const StateManagement = () => {
    const [items,setItems] = useState(['items 1','items 2']);
    const [editIndex,setEditIndex] = useState(null);
    const [inputValue,setInputValue] = useState('');

    // ADD
    const handleAdd = () => {
        setItems(prevItem => [...prevItem,`items ${items.length + 1}`])
    }
    // CHANGE
    const handleChange = (e)=> {
        setInputValue(e.target.value)
    }
    // DELETE
    const handleDel = (index) => {
        setItems(prevItem => prevItem.filter((_,i) => i !== index));
    }
    // EDIT
    const handleEdit = (index) => {
        setEditIndex(index);
        setInputValue(items[index]);
    }
    // SAVE
    const handleSave = () => {
        if(editIndex !== null && inputValue.trim !== ''){
            setItems(prevItem => prevItem.map((item,index) => index === editIndex ? inputValue : item))
            setEditIndex(null);
            setInputValue('');
        }
    }
  return (
    <div>
        <h2 className='font-bold text-[32px]'>CRUD</h2>
        <input type="text" value={inputValue} onChange={handleChange}  placeholder='type something...'/>
        {editIndex !== null && <button onClick={handleSave}>save</button>}
        <ul>
            {items.map((val,index) => (
                <li key={index}>
                    {val}
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDel(index)}>Delete</button>
                </li>
            ))}
        </ul>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default StateManagement