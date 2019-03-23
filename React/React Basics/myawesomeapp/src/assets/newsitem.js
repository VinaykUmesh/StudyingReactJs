import React from 'react';
import { css, hover  } from 'glamor' ;

const NewsItem = ({item}) => {

  let news_item = css({
      padding: '20px',
      boxSizing: 'border-cricle',
      borderBottom : '1px solid grey' ,
      ':hover' : {
        color : '#e84118'
      },
      '@media(max-width: 500px)':{
        color : '#e84118'
      }
  })

  let item_color = css({
    background : '#ffe8e2'
  })
     

 return(
   <div   className={ `${news_item} ${item_color}`}>
             <h3>{item.title}</h3>
             <div>{item.feed}</div>
            </div>
 )
}

export default NewsItem;