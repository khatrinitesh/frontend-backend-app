import React from 'react'
import { BtnPrimaryProps } from '../interface/interface'

const BtnPrimary:React.FC<BtnPrimaryProps> = ({label,onClick}) => {
  return (
    <div>
        <button onClick={onClick} className='' style={{backgroundColor:'red',color:'white'}}>{label}</button>
    </div>
  )
}

export default BtnPrimary