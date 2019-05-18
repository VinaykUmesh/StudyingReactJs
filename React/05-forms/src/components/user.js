import React, { Component } from 'react';
import FormFields from '../widgets/FormFields/formFields';

class User extends Component {

    state = {
        formData:{
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
                    placeholders : 'Enter Your Lastname'
                } 
            }
        }
        
    }

    render(){
        return(
            <div className="container"> 
                <form onSubmit={this.submitForm}>
                    <FormFields 
                    formData={this.state.formData}
                    />   
                    <button type="submit">Sign in</button>
                </form>
            </div>
        )
    }
}

export default User;