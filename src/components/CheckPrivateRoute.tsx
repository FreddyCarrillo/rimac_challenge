import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useInitStore } from '../store/initStore';

const CheckPrivateRoute: React.FC = () => {
  const { vehicle } = useInitStore(state => state);

  return vehicle ? <Outlet /> : <Navigate to="/" />;
};

export default CheckPrivateRoute;
