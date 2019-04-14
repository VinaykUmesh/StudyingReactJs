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
                 mother : 'martha',
                 color :' tomato',
           }

           changeColor (){
               // this.setState ({
               //         color : 'blue'
               // })
                this.refs.mycolor.style.color= ' blue'
           }

           
 render() {
         const styles ={
                  color:this.state.color
         }
                  return (
                          <div>
                               <h4 style={styles} ref="mycolor">{this.state.mother}</h4>

                               <div onClick={()=>{this.changeColor()}}>Change</div>
                               <UserTemplates  {...this.state}/>
                          </div>
                );
              }
}

export default User;