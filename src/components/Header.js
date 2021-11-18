import React from 'react';
import Bio from '../images/BIO-Logo.png'

import '../styles/main.scss';

const Header = () => {
  return (
    <section className={'Header'} style={{marginBottom:"200px"}}>
      <div className={'container Header__container'} style={{textAlign:"center",marginTop:"25px"}}>
        <div className={'Header__image '}>
          <img
          style={{marginRight:"40px"}}
            src={Bio}
            alt={'Compnay LOGO'}
          />
        </div>
       <h1>Front End Coding Challenge</h1>
      </div>
    </section>
  );
};

export default Header;
