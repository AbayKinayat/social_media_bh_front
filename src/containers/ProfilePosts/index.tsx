import React, { useEffect, useState, type FC } from 'react'
import { Button, Modal } from '../../components';
import ModalBody from '../../components/ModalBody';
import $api from '../../http';
import { IPaginationData } from '../../models/IPaginationData';
import { IPost } from '../../models/IPost';
import LogService from "../../services/log";
import PostCreateModal from '../PostCreateModal';

const logService = new LogService();

const limit = 10;

const ProfilePosts: FC = () => {

  const [createPostIsOpen, setCreatePostIsOpen] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);

  const fetchUserPosts = async () => {
    try {
      const { data } = await $api.get<IPaginationData<IPost>>("/posts/user", {
        params: {
          page,
          limit,
          filter: {}
        }
      });

      setPosts([...posts, ...data.data]);
      setTotal(data.total);


    } catch (e) {
      logService.error("Получить посты текущего пользователя", e);
    }
  }

  const createPostOpen = () => {
    setCreatePostIsOpen(true);
  }

  const createPostClose = () => {
    setCreatePostIsOpen(false);
  }

  useEffect(() => {
    fetchUserPosts();
  }, [page]);

  return (
    <div>
      <button onClick={() => setCreatePostIsOpen(true)}>
        Click to Me
      </button>
      <PostCreateModal
        isOpen={createPostIsOpen}
        onClose={createPostClose}
      />
    </div>
  )
}

export default ProfilePosts
