import type { FC, HTMLAttributes, ReactNode } from 'react';

import "./CardBody.scss";

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode,
}

const CardBody: FC<CardBodyProps> = ({ children, className = "", ...otherProps }) => {
  return (
    <div {...otherProps} className={`card-body ${className}`}>
      {children}
    </div>
  )
}

export default CardBody;