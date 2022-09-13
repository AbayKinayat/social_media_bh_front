import React from 'react'

import { IStep } from '../../models'
import StepItem from '../StepItem'
import "./StepList.scss";

interface StepListProps {
  items: IStep[]
}

const StepList: React.FC<StepListProps> = ({ items }) => {
  return (
    <ul className="app-step-list">
      {
        items.map((item, index) => (
          <StepItem 
            key={item.key}
            number={index + 1}
            step={item}
          />
        ))
      }
    </ul>
  )
}

export default StepList