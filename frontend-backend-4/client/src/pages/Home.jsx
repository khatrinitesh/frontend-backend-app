import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const apiUrl = import.meta.env.VITE_APP_API1;

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setUsers(response.data);
        setLoading(false); // Set to false on successful fetch
      })
      .catch(err => {
        setError('Error fetching data.'); // Update the error state
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [apiUrl]); // Include apiUrl as a dependency to re-fetch if it changes

  if(loading){
    return(
      <div>Loading...</div>
    )
  }
  if(error){
    return(
      <div>{error}</div>
    )
  }
  return (
    <div>
      <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
       <ul>
       {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email} {user?.address?.suite}
          </li>
        ))}
       </ul>
    </div>
  )
}

export default Home