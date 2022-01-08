import React, { FC } from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  width: auto;
  height: auto;
  color: white;
  font-size: 24px;
  font-family: sans-serif;
`;

type TProps = {
  text: string;
  size: number | string;
};

export const Title: FC<TProps> = ({ text,size, ...props }) => {
  return <StyledText {...props}>{text}</StyledText>;
};
