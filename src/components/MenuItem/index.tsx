import type { FC, ReactNode } from 'react';

import "./MenuItem.scss";

interface MenuItemProps {
  children: ReactNode
}

const MenuItem: FC<MenuItemProps> = ({ children }) => {
  return (
    <li className="menu-item">
      {children}
    </li>
  )
}

export default MenuItem