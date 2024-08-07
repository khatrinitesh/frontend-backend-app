import React from 'react'
import { ArrowProps } from '../interface/interface'

const Arrows:React.FC<ArrowProps> = ({arrows,onArrowClick}) => {

    const handleClick = (direction:ArrowProps['arrows'][number]['direction']) => {
        if(onArrowClick){
            onArrowClick(direction)
        }
    }
  return (
    <>
     <div className="arrow-container">
        {arrows.map((arrow => (
            <div key="index" className={`arrow ${arrow.direction}`} onClick={() => handleClick(arrow.direction)}>{arrow.label}</div>
        )))}
     </div>
    </>
  )
}

export default Arrows