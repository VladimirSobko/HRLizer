import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { HeaderContainer } from 'pages/Main/containers/Header';
import { AuthContext } from 'index';

const Main = () => {
  const { auth } = useContext(AuthContext);
  const [user] = useAuthState(auth);

  return (
    <div style={{ flex: '1 0 auto', minHeight: '100%' }}>
      <HeaderContainer user={user} auth={auth} />
    </div>
  );
};

export default Main;
