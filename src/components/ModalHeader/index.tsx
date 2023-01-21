import React, { useContext, FC, ReactNode } from 'react';

import Icon from "../Icon";
import { ModalContext } from "../Modal";
import "./ModalHeader.scss";

interface ModalHeaderProps {
  children?: ReactNode
}

const ModalHeader: FC<ModalHeaderProps> = ({ children }) => {

  const { onClose } = useContext(ModalContext);

  return (
    <div className="modal-header">
      {children}

      <button className="modal-close" onClick={onClose}>
	      <Icon name="close" />
      </button>
    </div>
  )
}

export default ModalHeader
