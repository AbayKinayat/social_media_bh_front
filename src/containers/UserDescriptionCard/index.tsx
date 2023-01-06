import type { FC } from 'react'

import { Card, CardBody, DescriptionItem, Descriptions } from '../../components';
import { IUser } from '../../models';
import "./UserDescriptionCard.scss";

interface UserDescriptionCardProps {
  user: IUser
}

const UserDescriptionCard: FC<UserDescriptionCardProps> = ({ user }) => {

  return (
    <Card className="user-description">
      <CardBody>
        <Descriptions>
          <DescriptionItem label="Имя">
            {user.firstName}
          </DescriptionItem>
          <DescriptionItem label="Фамилия">
            {user.lastName}
          </DescriptionItem>
          <DescriptionItem label="Пол">
            {user.dateBirth}
          </DescriptionItem>
          <DescriptionItem label="Дата рождения">
            {user.dateBirth}
          </DescriptionItem>
          <DescriptionItem label="Email">
            {user.email}
          </DescriptionItem>
        </Descriptions>
      </CardBody>
    </Card>
  )
}

export default UserDescriptionCard;