import React from 'react'
import { AspectRatioProps } from '../interface/interface'

const AspectRatio:React.FC<AspectRatioProps> = ({ aspectRatios, selectedRatioId, onRatioSelect }) => {

    const handleSelect = (id: number) => {
        if (onRatioSelect) {
          onRatioSelect(id);
        }
      };
  return (
    <>
     <div className="aspect-ratio-container">
      {aspectRatios.map(ratio => (
        <div
          key={ratio.id}
          className={`aspect-ratio-item ${selectedRatioId === ratio.id ? 'selected' : ''}`}
          onClick={() => handleSelect(ratio.id)}
        >
          <span className="ratio-label">{ratio.ratio}</span>
          <span className="ratio-description">{ratio.description}</span>
        </div>
      ))}
    </div>
    </>
  )
}

export default AspectRatio