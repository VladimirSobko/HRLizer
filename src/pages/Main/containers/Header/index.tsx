import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from 'components/Header';
import { CustomLink } from 'components/Link';
import { Title } from 'components/Text';

import { ROUTE } from 'constants/routes';

import { checkName } from './helpers';

import 'index.css';

type TProps = {
  user: any;
  auth: any;
};

const HeaderContainer: FC<TProps> = ({ user, auth }) => {
  const history = useHistory();

  const handleClick = (e: any) => {
    checkName(history, e);
  };

  const handleSignOut = () => {
    auth.signOut();
    history.push(ROUTE.LOGIN.PATH);
  };

  return (
    <>
      <Header>
        <Title text="HRLizer" size="50px" />
        <div className="header_menu_wrapper">
          <CustomLink
            onClick={(e) => handleClick(e)}
            name="sandbox"
            text="Песочница"
          />
          <CustomLink
            onClick={(e) => handleClick(e)}
            name="archive"
            text="Архив кандидатов"
          />
          <CustomLink
            onClick={(e) => handleClick(e)}
            name="board"
            text="Доска"
          />
          <CustomLink
            name="profile"
            onClick={(e) => handleClick(e)}
            text="Личный кабинет"
          />
          <CustomLink
            onClick={(e) => handleClick(e)}
            name="bookmarks"
            text="Закладки"
          />
          {user && (
            <CustomLink onClick={handleSignOut} name="logout" text="Выйти" />
          )}
        </div>
      </Header>
    </>
  );
};

export { HeaderContainer };
