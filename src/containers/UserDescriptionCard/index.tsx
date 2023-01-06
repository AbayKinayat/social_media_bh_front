import type { FC } from 'react'

import { Card, CardBody, DescriptionItem, Descriptions } from '../../components';
import { useAppSelector } from '../../hooks';
import { IUser } from '../../models';
import "./UserDescriptionCard.scss";

interface UserDescriptionCardProps {
  user: IUser
}

const UserDescriptionCard: FC<UserDescriptionCardProps> = ({ user }) => {

  const { sexs } = useAppSelector(state => state.sexs);

  const userSex = sexs.find(sex => sex.id === user.sexId);

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
            {userSex && userSex.nameRu}
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