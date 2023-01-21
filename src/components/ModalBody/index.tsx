import React, { FC, ReactNode } from 'react'

import "./ModalBody.scss";

interface ModalBodyProps {
  children: ReactNode
}

const ModalBody: FC<ModalBodyProps> = ({ children }) => {
  return (
    <div className="modal-body">
      {children}
    </div>
  )
}

export default ModalBody