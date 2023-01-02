import type { FC, ReactNode } from 'react';
import classNames from 'classnames';

import "./Menu.scss";

interface DropdownProps {
  isOpen: boolean,
  className?: string,
  onClose?: () => void,
  children: ReactNode
}

const Dropdown: FC<DropdownProps> = ({
  isOpen,
  className = "",
  onClose = () => { },
  children
}) => {
  return (
    <div className={classNames("menu", className, { "menu--active": isOpen })}>
      <ul className="menu__list">
        {children}
      </ul>
    </div>
  )
}

export default Dropdown