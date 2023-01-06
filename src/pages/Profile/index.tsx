import { type FC, useEffect } from "react";
import { Col, Row } from "react-grid-system";
import { fetchSexs } from "../../app/slices/SexSlice/actionCreators";
import { Card, CardBody, SkeletonField } from "../../components";
import { UserDescriptionCard } from "../../containers";
import UserCard from "../../containers/UserCard";
import { useAppDispatch, useAppSelector } from "../../hooks";

import "./Profile.scss";

const Profile: FC = () => {

  const { user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSexs());
  }, []);

  return (
    user ?
      <Row className="profile">
        <Col className="profile_left" xs="content">
          <UserCard
            user={user}
            userImage=""
          />
          <Card className="test-card">
            <CardBody className="test-card__body">
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
              <SkeletonField />
            </CardBody>
          </Card>

        </Col>
        <Col className="profile_right">
          <UserDescriptionCard
            user={user}
          />
        </Col>
      </Row> : null
  )
}

export default Profile