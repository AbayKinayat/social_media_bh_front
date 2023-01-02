import type { FC } from 'react';
import { Button } from '../../components';
import { useAppSelector } from '../../hooks';

import "./UserInfo.scss";

const UserInfo: FC = () => {
  const { user } = useAppSelector(state => state.auth);

  return (
    <Button className="user-info">
      {user?.lastName} {user?.firstName}
    </Button>
  )
}

export default UserInfo; 