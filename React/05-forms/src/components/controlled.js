import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name : '',
        lastname:''
    }

    handleNameChange =(event) =>{
            this.setState({
                name:event.target.value
            })
    }

    handleLastnameChange =(event) =>{
            this.setState({
                lastname:event.target.value
            })
          }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter your Name:</label>
                        <input
                            type="text"
                            onChange={this.handleNameChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter your Lastname:</label>
                        <input
                            type="text"
                            onChange={this.handleLastnameChange}
                            value={this.state.lastname}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Controlled;