import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { CustomLink } from 'components/Link';

import { checkName, randomizer } from 'helpers/helpers';
import { useHistory } from 'react-router-dom';

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-beetwen;
  width: 50%;
`;

const StyledHeaderWrap = styled(StyledWrap)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const Sandbox: FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');

  const connect = () => {
    const socket = new WebSocket('ws://localhost:5000');

    socket.onopen = () => {
      const message = {
        id: 1,
        username: 'Vladimir',
      };
      socket.send(JSON.stringify(message));
    };

    socket.onmessage = (event) => {
      const question = randomizer(JSON.parse(event.data));
      if (question) {
        setName(question.text);
      }
    };

    socket.onclose = () => {
      console.log('Socket закрыт');
    };

    socket.onerror = (e) => {
      console.log('Socket произошла ошибка', e);
    };
  };

  const handleClick = (e: any) => {
    history.push('/main');
  };

  return (
    <>
      <StyledHeaderWrap>
        <h2>Песочница</h2>
        <CustomLink
          onClick={(e) => handleClick(e)}
          name="back"
          text="На главную"
        />
      </StyledHeaderWrap>
      <StyledWrap>
        <button type="button" onClick={connect}>
          Открыть чат
        </button>
        <textarea value={name} />
      </StyledWrap>
    </>
  );
};

export default Sandbox;
