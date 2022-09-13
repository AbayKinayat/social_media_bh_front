import React from 'react'
import { IStep } from '../../models'

import "./StepItem.scss";

interface StepItemProps {
  number: number;
  step: IStep;
}

const StepItem: React.FC<StepItemProps> = ({ step, number }) => {
  return (
    <li className="app-step-item">
      <div className="app-step-item__circle">
        {number}
      </div>
      {step.text}
    </li>
  )
}

export default StepItem