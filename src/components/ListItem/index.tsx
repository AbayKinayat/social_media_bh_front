import type { FC, ReactNode } from 'react';

import "./ListItem.scss";

interface ListItemProps {
  children?: ReactNode,
  color?: "primary" | "secondary" | "white",
}

const ListItem: FC<ListItemProps> = ({ children, color = "white" }) => {
  return (
    <li className={`list-item ${color}`}>
      <button className="list-item__btn">
        {children}
      </button>
    </li >
  )
}

export default ListItem