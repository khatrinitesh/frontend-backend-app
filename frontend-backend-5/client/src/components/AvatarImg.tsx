import React from 'react'
import { AvatarProps } from '../interface/interface';

const AvatarImg:React.FC<AvatarProps> = ({avatar,onClick}) => {
    const {src,alt,size=50} = avatar;
  return (
    <>
    <div
      className="avatar-container"
      style={{ width: size, height: size }}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="avatar-image"
        style={{ width: size, height: size }}
      />
    </div>
    </>
  )
}

export default AvatarImg