import React from 'react';
import PropTypes from 'prop-types';

const User_template = () => {

 return (
  <div>
     <div>component</div>
  </div>
 );
};

User_template.propTypes = {
         name:PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.number,
              PropTypes.oneOf(['Vinayk','Umesh']),
         ]),
         lastname:PropTypes.string,
         age:PropTypes.number, 
         english:PropTypes.bool,
         cars:PropTypes.arrayOf(PropTypes.string),
         message:PropTypes.func,
         persons:PropTypes.object,
         mother: (props,propName) => {
           if( props[propName] !== 'martha'){
              return new Error(`The name is incorrect should be Martha`)
           }
         }
}

export default User_template;