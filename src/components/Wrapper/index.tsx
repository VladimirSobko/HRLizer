import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 0 auto;
`;

type TProps = {
  children: any;
};

const Wrapper: FC<PropsWithChildren<TProps>> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export { Wrapper };
