import React from 'react'
import { BULLETS } from '../constants/constants'

const ListBullet = () => {
  return (
    <>
     <ul>
      {BULLETS.map((bullet, index) => (
        <li key={index} className={`bullet ${bullet.type}`}>
          <span>{bullet.title}</span>
          <br />
          <div className="flex">
            {bullet.status ? (
                <span className="status bg-sky-200">Active</span>
            ) : (
                <span className="status bg-red-400">Inactive</span>
            )}
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}

export default ListBullet