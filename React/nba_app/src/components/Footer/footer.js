import React from 'react';
import { Link } from 'react-router-dom';
import style from './footer.css';
import { Cur_Year } from '../../config';

const Footer = () =>(
  <div className={style.footer}>
     <Link to="/"className={style.logo}>
     <img alt="nba logo" src="/images/nba_logo.png" />
     </Link>
     <div className={style.right}>
            @NBA {Cur_Year} All rights reserved
     </div>
  </div>
 );

export default Footer;