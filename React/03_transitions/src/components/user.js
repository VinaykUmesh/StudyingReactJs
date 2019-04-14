import React, { Component } from 'react';
import UserTemplates from './user_template';
class User extends Component {

             state = {
                 name : 'Vinayk',
                 lastname : 'Umesh',
                 age : 22 ,
                 english : true,
                 cars: ["nissan","bugatti"],
                 message(){console.log('hello')},
                 persons:{name:"raja" , name2 : "reaji"},
                 mother : 'martha'
           }

 render() {
                  return (
                          <div>
                               <UserTemplates  {...this.state}/>
                          </div>
                );
              }
}

export default User;