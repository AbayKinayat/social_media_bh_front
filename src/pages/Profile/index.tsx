import { type FC, useEffect } from "react";
import { Col, Row } from "react-grid-system";
import { fetchSexs } from "../../app/slices/SexSlice/actionCreators";
import { Card, CardBody, SkeletonField, Tab, Tabs } from "../../components";
import { UserDescriptionCard } from "../../containers";
import ProfilePosts from "../../containers/ProfilePosts";
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
          <Tabs>
            <Tab name="Посты">
              <ProfilePosts />
            </Tab>
            <Tab name="Фотографии">
              Фотографии
            </Tab>
          </Tabs>
        </Col>
      </Row> : null
  )
}

export default Profile