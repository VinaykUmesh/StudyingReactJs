import React from 'react';

const userHoc = (WrappedComponent,arg) => {
          return (props) =>  (
                  <div>

                   {arg}
                   <WrappedComponent   {...props}/>
                  </div>
          )
}

export default userHoc;