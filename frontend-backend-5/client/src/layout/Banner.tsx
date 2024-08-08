import React from 'react'
import { BannerProps } from '../interface/interface'

const Banner:React.FC<BannerProps> = ({title,desc}) => {
  return (
    <div className="bannerContent bg-sky-300 py-10">
      <div className="container mx-auto">
        <h2 className='font-bold text-[32px]'>{title}</h2>
        <p className='font-medium text-[16px]'>{desc}</p>
        </div>
    </div>
  )
}

export default Banner