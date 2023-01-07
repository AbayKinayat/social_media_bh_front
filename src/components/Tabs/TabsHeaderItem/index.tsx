import { FC, HTMLAttributes, useState } from 'react'
import classNames from 'classnames';

import type { IAppColor } from '../../../models/IAppColor';
import "./TabsHeaderItem.scss";


interface HeaderItemProps extends HTMLAttributes<HTMLButtonElement> {
  name: string,
  isActive: boolean,
  color: IAppColor,
  activeColor: IAppColor
}

const HeaderItem: FC<HeaderItemProps> = ({ name, isActive, color, activeColor, ...otherProps }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <button
      {...otherProps}
      className={classNames(
        "tabs-header-item",
        {
          'tabs-header-item--active': isActive,
          [isActive || isHovered ? activeColor : color]: true
        }
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {name}
    </button>
  )
}

export default HeaderItem;