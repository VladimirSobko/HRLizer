import React from 'react';
import { Wrapper } from 'components/Wrapper';
import { CustomLink } from 'components/Link';
import { CustomText } from 'components/Text';

const handleClick = () => {
  console.log('CLICK');
};

const Footer = () => {
  return (
    <>
      <Wrapper>
        <div>Footer</div>
      </Wrapper>
    </>
  );
};

export { Footer };
