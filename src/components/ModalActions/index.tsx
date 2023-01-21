import type { FC, ReactNode } from 'react';

import "./ModalActions.scss";

interface ModalActionsProps {
  children?: ReactNode
}

const ModalActions: FC<ModalActionsProps> = ({ children }) => {
  return (
    <div className="modal-actions">
      {children}
    </div>
  )
}

export default ModalActions;