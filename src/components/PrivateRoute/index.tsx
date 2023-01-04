import React from 'react'
import { useNavigate } from 'react-router-dom'
import { refresh } from '../../app/slices/AuthSlice/actionCreators';

import { useAppDispatch, useAppSelector } from '../../hooks';

interface PrivateRouteProps {
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {

  const { refreshLoading, refreshSuccess, authSuccess, user } = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token") || "";

  React.useEffect(() => {
    if (!user) {
      dispatch(refresh());
    }
  }, [])

  React.useEffect(() => {
    if (!refreshLoading) {
      if (!token || !user) {
        navigate("/auth/login");
      }
    }
  }, [user, refreshLoading])

  return (
    <>
      {
        (refreshSuccess || authSuccess) && children
      }
    </>
  )
}

export default PrivateRoute