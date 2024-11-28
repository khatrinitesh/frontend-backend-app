import React, { useEffect, useState } from 'react';

import  axios  from 'axios';
import { Routes,Route } from 'react-router-dom';
import Home from './../pages/Home';
import About from './../pages/About';

const AppComp = () => {
    const [homeMessage, setHomeMessage] = useState('');
    const [aboutMessage, setAboutMessage] = useState('');
  
    useEffect(() => {
        // Fetch Home page data from the server
        axios.get('http://localhost:5000/api/home')
          .then((response) => {
            setHomeMessage(response.data.message);  // make sure this is correct
          })
          .catch((error) => {
            console.error("There was an error fetching the home message!", error);
          });
    
        // Fetch About page data from the server
        axios.get('http://localhost:5000/api/about')
          .then((response) => {
            setAboutMessage(response.data.message);  // make sure this is correct
          })
          .catch((error) => {
            console.error("There was an error fetching the about message!", error);
          });
      }, []);


   if (!homeMessage || !aboutMessage) {
    return <div>Loading...</div>;
  }
    return (
        <>
            <Routes>
                <Route path="/" element={<Home message={homeMessage}/>}/>
                <Route path="/about" element={<About message={aboutMessage}/>}/>
            </Routes>
        </>
      
    );
  };
  


  export default AppComp