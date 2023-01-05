import type { FC } from 'react';

import { Card, CardBody, CardImage, Typography } from '../../components';
import { IUser } from '../../models';
import NoUserImage from "../../assets/images/no-user.png";
import "./UserCard.scss";

interface UserCardProps {
  user: IUser,
  userImage?: string
}

const UserCard: FC<UserCardProps> = ({ user, userImage }) => {
  return (
    <Card width="374px" className="user-card">
      <CardImage
        src={userImage || NoUserImage}
        height="325px"
      />
      <CardBody>
        <Typography
          variant='h6'
          fontWeight={700}
        >
          {user.lastName} {user.firstName}
        </Typography>
        <Typography
          variant="body2"
          className="user-card__goal-name"
        >
          Цель:
        </Typography>
        <Typography
          variant="body2"
          fontWeight={500}
        >
          Устроиться в кремниевую долину
        </Typography>
      </CardBody>
    </Card>
  )
}

export default UserCard