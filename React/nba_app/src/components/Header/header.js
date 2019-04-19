import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';  

import FontAwesome from 'react-fontawesome';

const Header = () => {


   const  navBars = () => (
         <div classname={style.navbars}>
             <FontAwesome name="bars" 
                style={{
                      color : '#dfdfdf',
                      padding : '10px',
                      cursor : 'pointer' 
                }}           
             />
         </div>
   )

   const logo = () => ( 
   <Link to="/" className={style.logo}>
            <img alt="nba logo" src="/images/nba_logo.png" />
   </Link>
  )
   

 return (
       <header className={style.Header}>
           <div  className={style.HeaderOpt}>
                    {navBars()}
                   {logo()}
           </div>
       </header>
 );
};

export default Header;