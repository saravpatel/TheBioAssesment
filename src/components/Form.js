import React from 'react';

import ShortenLinks from './ShortenLinks';

import '../styles/main.scss';

const Form = () => {
  return (
    <section className={'form__stats flex flex__column flex__jc-c flex__ai-c'}>
      <ShortenLinks />
    </section>
  );
};

export default Form;
