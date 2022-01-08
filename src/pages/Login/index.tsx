import React, { FC, useContext } from 'react';
import { Title } from 'components/Text';
import styled from 'styled-components';
import { Input } from 'components/Input';
import { CommonButton } from 'components/Button';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import { AuthContext } from 'index';
import { ROUTE } from 'constants/routes';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 15vh;
`;

const Login: FC = () => {
  const history = useHistory();
  const { auth } = useContext(AuthContext);

  const authGoogleProvider = new firebase.auth.GoogleAuthProvider();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const user = await auth.signInWithPopup(authGoogleProvider);
    if (user) {
      history.push(ROUTE.MAIN.PATH);
    }
  };

  return (
    <StyledWrapper>
      <Title text="Добро пожаловать" size="50px" />
      <CommonButton text="Войти" onClick={handleSubmit} />
    </StyledWrapper>
  );
};

export default Login;
