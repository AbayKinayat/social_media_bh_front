import type { FC, HTMLAttributes } from 'react';

import "./SkeletonField.scss";

interface SkeletonFieldProps extends HTMLAttributes<HTMLDivElement> {

}

const SkeletonField: FC<SkeletonFieldProps> = ({ className = "", ...otherProps }) => {
  return (
    <div className={`skeleton-field ${className}`} {...otherProps}>
      <div className="skeleton-field__animation"></div>
    </div>
  )
}

export default SkeletonField;