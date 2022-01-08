import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: ${(props) => props.width}vh;
  height: ${(props) => props.height}vh;
  border-top: none;
  border-left: none;
  border-right: none;
`;

const Input = ({ placeholder, width, height }: any) => {
  return (
    <StyledInput placeholder={placeholder} width={width} height={height} />
  );
};

export { Input };
