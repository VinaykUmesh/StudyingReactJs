import React, { Component } from 'react';

class Uncontrolled extends Component {

    state = {
        name:'',
        lastname:''
    }

    handleValues =(event)=>{
        event.preventDefault();

        const values = {
            name: this.name.value,
            lastname: this.lastname.value
        }

        console.log(values)
    }

    render(){
        return(
            <div>
               <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter Name:</label>
                        <input
                            type="text"
                            ref={input => this.name = input}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter Lastname:</label>
                        <input
                            type="text"
                            ref={input => this.lastname = input}
                        />
                    </div>
                    <button onClick={this.handleValues}>Sign in</button>
                </form>
            </div>
            </div>
        )
    }
}

export default Uncontrolled;