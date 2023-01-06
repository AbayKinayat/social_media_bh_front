import { FC, ReactNode } from 'react'

import "./DescriptionItem.scss";

interface DescriptionItemProps {
  children?: ReactNode,
  label: string
}

const DescriptionItem: FC<DescriptionItemProps> = ({ children, label }) => {
  
  return (
    <div className="description-item">
      <dt className="description-item__label">
        {label}
      </dt>
      <dd className="description-item__value">
        {children || "Отсутвует"}
      </dd>
    </div>
  )
}

export default DescriptionItem