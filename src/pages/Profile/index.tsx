import type { FC } from "react";
import { Col, Row } from "react-grid-system";
import UserCard from "../../containers/UserCard";
import { useAppSelector } from "../../hooks";

const Profile: FC = () => {

  const { user } = useAppSelector(state => state.auth);

  return (
    <div className="profile">
      <Row>
        <Col>
          {
            user &&
            <UserCard
              user={user}
              userImage=""
            />
          }
        </Col>
      </Row>
    </div>
  )
}

export default Profile