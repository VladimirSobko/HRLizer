import React from 'react';
import { HeaderContainer } from 'pages/Main/containers/Header';
import { Footer } from './containers/Footer';

const Main = () => {
  return (
    <>
      <div style={{ flex: '1 0 auto', minHeight: '100%' }}>
        <HeaderContainer />
      </div>
      <div style={{ flexShrink: 0 }}>
        <Footer />
      </div>
    </>
  );
};

export default Main;
