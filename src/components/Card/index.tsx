import type { FC, HTMLAttributes, ReactNode } from "react";

import "./Card.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode,
  width?: number | string
}

const Card: FC<CardProps> = ({ children, width, className = "", ...otherProps }) => {
  return <div className={`card ${className}`} style={{ width }} {...otherProps}>
    {children}
  </div>;
}

export default Card