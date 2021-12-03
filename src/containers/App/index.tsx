import React, { FC, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

type TApp = {
  children: React.ReactNode;
};

const App: FC<TApp> = ({ children }) => {
  const { state, pathname, search } = useLocation();
  const dispatch = useDispatch();

  return <>{children}</>;
};

export { App };

