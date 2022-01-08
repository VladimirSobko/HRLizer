import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  color: black;
  border: 1px solid black;
  width: auto;
  height: 300px;
  margin: 0 auto;
`;

type TProps = {
  children: any;
};

const Header: FC<PropsWithChildren<TProps>> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export { Header };
