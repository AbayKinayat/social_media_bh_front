import React, { useEffect, useState, type FC } from 'react'
import $api from '../../http';
import { IPaginationData } from '../../models/IPaginationData';
import { IPost } from '../../models/IPost';
import LogService from "../../services/log";

const logService = new LogService();

const limit = 10;

const ProfilePosts: FC = () => {

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

  useEffect(() => {
    fetchUserPosts();
  }, [page]);

  return (
    <div>
      Всего постов {total}
      {
        JSON.stringify(posts)
      }
    </div>
  )
}

export default ProfilePosts