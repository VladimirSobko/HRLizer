import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 30%;
  border-top: none;
  border-left: none;
  border-right: none;
`;

const Input = ({placeholder}: any) => {
  return <StyledInput placeholder={placeholder} />;
};

export { Input };
