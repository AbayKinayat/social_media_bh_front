import type { FC, ReactNode } from 'react';

import "./ListItem.scss";

interface ListItemProps {
  children?: ReactNode,
  color?: "primary" | "secondary" | "white",
}

const ListItem: FC<ListItemProps> = ({ children, color = "white" }) => {
  return (
    <button className={`list-item ${color}`}>
      {children}
    </button>
  )
}

export default ListItem