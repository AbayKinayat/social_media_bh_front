import type { FC, ReactNode } from 'react';

import "./CardBody.scss";

interface CardBodyProps {
  children?: ReactNode
}

const CardBody: FC<CardBodyProps> = ({ children }) => {
  return (
    <div className="card-body">
      {children}
    </div>
  )
}

export default CardBody;