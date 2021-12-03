import React, { FC } from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  width: auto;
  height: auto;
  color: #3300FF;
  font-size: 24px;
`;

type TProps = {
  text: string;
  size: number | string;
};

export const CustomText: FC<TProps> = ({ text,size, ...props }) => {
  return <StyledText {...props}>{text}</StyledText>;
};
