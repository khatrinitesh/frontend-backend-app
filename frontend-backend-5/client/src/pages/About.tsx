import React, { useState } from 'react'
import Banner from '../layout/Banner'
import BtnProps from '../components/BtnProps';

const About = () => {
  const handleClick = () => {
    console.log('Avatar clicked!');
    
  };

  return (
    <div className='content'>
       <Banner title="About" desc="Nisi tempor id velit esse irure velit deserunt ex qui magna nostrud qui."/>
       
      <div className="container mx-auto">
        <BtnProps onClick={handleClick}/>
      </div>
    </div>
  )
}

export default About