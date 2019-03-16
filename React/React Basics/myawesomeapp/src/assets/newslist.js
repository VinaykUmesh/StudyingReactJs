import React from 'react';
import NewsItem from './newsitem';

//styles
import '../css/styles.css';

const NewsList = (props) => {
          const items = props.news.map( (item)=> {
           return (
            <NewsItem key={item.id} item={item}/>
           )
          })
      return(
          
          <div className="content">{props.children}
          {items}</div>
       
      )
}

export default NewsList;