import type { FC, ReactNode } from "react";

import "./Card.scss";

interface CardProps {
  children?: ReactNode
}

const Card: FC<CardProps> = ({ children }) => {
  return <div className="card">
    {children}
  </div>;
}

export default Card