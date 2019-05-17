import React, { Component } from 'react';

class User extends Component {

    state = {
        fromData:{
            name :{
                element : 'Name',
                value: ' ',
                label : true,
                labelText : 'Name',
                config : {
                    name : 'name_input',
                    type : 'text',
                    placeholders : 'Enter Your Name'
                } 
            },
            lastname :{
                element : 'Lastame',
                value: ' ',
                label : true,
                labelText : 'Lastname',
                config : {
                    name : 'name_input',
                    type : 'text',
                    placeholders : 'Enter Your LAstname'
                } 
            }
        }
        
    }

    render(){
        return(
            <div className="container"> 
                <form onSubmit={this.submitForm}>
                    
                </form>
            </div>
        )
    }
}

export default User;