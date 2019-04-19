import React from 'react';
import { Link } from  'react-router-dom';
import FontAwesome from 'react-fontawesome';

import style from './sidenav.css';
const SideNavItems = () => {
      const items = [
       {
        css : style.option,
        link : "/",
        icon : "home",
        text : "Home" 
       },
       {
        css : style.option,
        link : "/news",
        icon : "file-text-o",
        text : "News"  
       },
       {
        css : style.option,
        link : "/videos",
        icon : "play",
        text : "Videos"  
       },
       {
        css : style.option,
        link : "/sign-in",
        icon : "sign-in",
        text : "Sign in"  
       },
       {
        css : style.option,
        link : "/sign-out",
        icon : "sign-out",
        text : "Sign out"  
       },
       
      ]

      const showItems =()=>{
       return items.map( (item,i)=> {
           return (
            <div key={i} className={item.css}>
                <Link to={item.link}>
                           <FontAwesome name={item.icon} />
                           {item.text}
                </Link>
            </div>
           )
       })
      }

 return (
     <div>
           {showItems()}
     </div>
  );
};

export default SideNavItems;