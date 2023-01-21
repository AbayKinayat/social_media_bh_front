import React, { FC } from 'react'

import { Button, InputEmpty, Modal, ModalActions, ModalBody, ModalHeader } from "../../components";
import ContentArea from '../../components/ContentArea';
import "./PostCreateModal.scss";

interface PostCreateModalProps {
  isOpen: boolean,
  onClose: () => void
}

const PostCreateModal: FC<PostCreateModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      className="post-create-modal"
      isOpen={isOpen}
      onClose={onClose}
      maxWidth='600px'
      width="100%"
    >
      <ModalHeader>
        Создать публикацию
      </ModalHeader>
      <ModalBody>
        <div className="post-create-modal__content">
          <InputEmpty
            mod="title"
            InputProps={{ placeholder: "Введите загаловок" }}
          />
          <ContentArea placeholder="Описание публикации" />
        </div>
      </ModalBody>
      <ModalActions>
        <Button>
          Сохранить
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default PostCreateModal
