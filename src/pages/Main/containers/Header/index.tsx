import React from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from 'components/Header';
import { CustomLink } from 'components/Link';
import { CustomText } from 'components/Text';
import { CommonButton } from 'components/Button';

import 'index.css';
import { checkName } from './helpers';

const HeaderContainer = () => {
  const history = useHistory();

  const handleClick = (e: any) => {
    checkName(history, e);
  };

  return (
    <>
      <Header>
        <CustomText text="HRLizer" size="50px" />
        <div className="header_menu_wrapper">
          <CustomLink
            onClick={(e) => handleClick(e)}
            name="calendar"
            text="Календарь"
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
          <CommonButton
            onClick={() => history.push('/login')}
            text="Зарегистрироваться"
          />
        </div>
      </Header>
    </>
  );
};

export { HeaderContainer };
