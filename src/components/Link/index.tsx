/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  width: auto;
  height: auto;
  color: white;
  font-size: 24px;
`;

type TProps = {
  text: string;
  name?: string;
  onClick?: (e: any) => void; 
};

export const CustomLink: FC<TProps> = ({ text, ...props }) => {
  return <StyledLink {...props}>{text}</StyledLink>;
};
