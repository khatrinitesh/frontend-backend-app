import React from 'react'
import { AnimatedListProps } from '../interface/interface'

const AnimatedList:React.FC<AnimatedListProps> = ({items,animationDuration}) => {
  return (
    <>
    <ul className="animated-list">
      {items.map(item => (
        <li
          key={item.id}
          className="animated-item"
          style={{ animationDuration: `${animationDuration}ms` }}
        >
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
    </>
  )
}

export default AnimatedList