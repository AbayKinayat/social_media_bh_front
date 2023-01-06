import type { FC, ReactNode, HTMLAttributes } from 'react'

import "./Descriptions.scss";

interface DescriptionsProps extends HTMLAttributes<HTMLDListElement> {
  children?: ReactNode
}

const Descriptions: FC<DescriptionsProps> = ({ children, className = "", ...otherProps }) => {
  return (
    <dl className={`descriptions ${className}`} {...otherProps}>
      {children}
    </dl>
  )
}

export default Descriptions