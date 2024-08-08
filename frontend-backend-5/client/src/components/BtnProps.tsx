import React from 'react'
import { ButtonProps } from '../interface/interface'

const BtnProps= ({style,onClick}:ButtonProps) => {
  return (
    <div>
        <button style={{backgroundColor:'blue'}} onClick={onClick}>Click me</button>
    </div>
  )
}

export default BtnProps