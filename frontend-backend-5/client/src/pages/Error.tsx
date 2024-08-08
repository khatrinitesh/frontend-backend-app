import React from 'react'
import Banner from '../layout/Banner'
import { useNavigate } from 'react-router-dom'
import BtnPrimary from '../components/BtnPrimary';

const Error = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/')
    }
  return (
    <div className='content h-full w-full flex items-center jusitfy-center flex-col'>
        <Banner title="Error" desc="Nisi tempor id velit esse irure velit deserunt ex qui magna nostrud qui."/>
        <BtnPrimary label="Return homepage" onClick={handleBack}/>
    </div>
  )
}

export default Error