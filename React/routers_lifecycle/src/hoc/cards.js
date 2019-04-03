import React from 'react';

const Card = (props) => {

         const style = { 
                background : 'lightgrey'
         }
         console.log(props.childrens)
          return (
                  <div style={style}>
                         {props.childrens}
                  </div>
          )
}

export default Card;