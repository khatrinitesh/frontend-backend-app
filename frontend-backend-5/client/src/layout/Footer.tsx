import React from 'react'

const Footer = () => {

    const currentFullyear = new Date().getFullYear();
  return (
    <footer className='footer bg-black text-white p-2'>
      <div className="container mx-auto">
        <p>&copy; {currentFullyear}</p>
        </div>
    </footer>
  )
}

export default Footer