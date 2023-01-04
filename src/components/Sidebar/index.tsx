import { type HTMLAttributes, type FC, type ReactNode } from 'react'
import classNames from 'classnames';

import "./Sidebar.scss";

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode,
  isOpen: boolean,
  position: "left" | "right",
  color?: "primary" | "secondary"
}

const Sidebar: FC<SidebarProps> = ({
  children,
  isOpen,
  position,
  color = "primary",
  className = "",
  ...otherProps
}) => {

  return (
    <aside
      {...otherProps}
      className={
        classNames("sidebar", color, className, {
          "sidebar--left": position === "left",
          "sidebar--right": position === "right",
          "sidebar--is-open": isOpen,
        })
      }
    >
      {children}
    </aside>
  )
}

export default Sidebar;