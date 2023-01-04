import type { FC, HTMLAttributes, ReactNode } from 'react';

import "./MenuItem.scss";

interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode
}

const MenuItem: FC<MenuItemProps> = ({ children, className = "", ...otherProps }) => {
  return (
    <li {...otherProps} className={`menu-item ${className}`}>
      {children}
    </li>
  )
}

export default MenuItem