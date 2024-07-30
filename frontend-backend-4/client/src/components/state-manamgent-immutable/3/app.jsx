import React, { useState } from 'react'

const StateManagement = () => {
    const [smile,setSmile] = useState(['smile 1','smile 2','smile 3']);
    const [editIndex,setEditIndex] = useState(null);
    const [inputChange,setInputChange] = useState('');

    // HANDLE ADD
    const handleAdd = () => {
        setSmile(prevSmile => [...prevSmile,`Smile ${smile.length + 1}`])
    }

    // HANDLE CHANGE
    const handleChange  =(e) => {
        setInputChange(e.target.value)
    }

    // Function to delete an item
    const btnDel = (index)=> {
        setSmile(prevItem => prevItem.filter((_,i) => i !== index));
    }

    // Function to handle edit
    const handleEdit = (index)=> {
        setEditIndex(index);
        setInputChange(smile[index]);  // Set input value to the item being edited
    }

    // function to save changes
    const handleSave  = () => {
        if(editIndex !== null && inputChange.trim() !== ''){
            setSmile(prevSmile => prevSmile.map((item,index) => index === editIndex ? inputChange : item))
            setEditIndex(null);
            setInputChange('');
        }
    }

  return (
    <div>
        <input type="text" value={inputChange} onChange={handleChange} placeholder="Enter a new item" />
        <button onClick={handleAdd}>Add</button>
        {editIndex !== null && (
            <button onClick={handleSave}>Save</button>
        )}
        <ul>
            {smile.map((val,index) => (
                <li key={index}>{val}
                <button onClick={() => btnDel(index)}>Delete</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
                </li>
            ))}
        </ul>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default StateManagement