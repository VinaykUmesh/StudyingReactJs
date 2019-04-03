import React from 'react';

const Conditional = () => {

           //const value = true;

          const  returnValue = ( ) =>{
            return true
           }

           const showIt = ( ) =>{
             return (
              <div>
              { 
               returnValue() === false ? 
               <div>Hello it's me</div>
               :
               <div>Hello i'm not</div>
              }
           </div>
             )
           }

          return (
                  <div>
                     { 
                      returnValue()  ? 
                      <div>Hello it's me</div>
                      :
                      <div>Hello i'm not</div>
                     }
                     {showIt()}
                  </div>
          )
}

export default Conditional;