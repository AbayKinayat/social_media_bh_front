import React, { type FC, type ReactNode, useState, useEffect } from 'react';
import classNames from 'classnames';

import Portal from '../Portal';
import "./Menu.scss";

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  anchorEl: HTMLElement | null,
  isOpen: boolean,
  onClose?: () => void,
  children: ReactNode,
}

const Menu: FC<MenuProps> = ({
  anchorEl,
  isOpen,
  className = "",
  onClose = () => { },
  children,
  ...otherProps
}) => {
  const [position, setPosition] = useState({ left: 0, top: 0 })

  useEffect(() => {
    if (anchorEl) {
      const anchorElRect = anchorEl.getBoundingClientRect();
      setPosition({ top: anchorEl.clientHeight + anchorElRect.y + 5, left: anchorElRect.x });
    }
  }, [anchorEl]);

  return (
    <Portal wrapperId="portal-root">
      <div className={classNames("background-overlay", { active: isOpen })} onClick={onClose}></div>
      <div {...otherProps} style={{ top: position.top, left: position.left }} className={classNames("menu", className, { "menu--active": isOpen })} >
        <ul className="menu__list">
          {children}
        </ul>
      </div>
    </Portal>
  )
}

export default Menu