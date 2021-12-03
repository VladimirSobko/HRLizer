import React from 'react';
import styled from 'styled-components';

const StyledDatePicker = styled.input`
  width: 30%;
`;

const DatePicker = ({ type }: any) => {
  return <StyledDatePicker type={type} />;
};

export { DatePicker };
