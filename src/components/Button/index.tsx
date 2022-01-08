import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 17px 32px;
  width: auto;
  height: auto;
  color: white;
  font-size: 16px;
  background: black;
  border-radius: 5px;
`;

type TProps = {
  text: string;
  onClick: (e?: any) => void;
};

export const CommonButton: FC<TProps> = ({ text, ...props }) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};
