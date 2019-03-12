import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import  JSON from './db.json';
//Assets
import Header from './assets/header'
import NewsList from './assets/newslist.js';

//Fetching Dynamic Data form the user object 
// const user = {
//     fname : 'Vinayk',
//     lname : 'Umesh',
//     age : 23
// }


class App extends Component{
    state ={
        news : JSON
    }
    render(){
        
         return (
            <div>
                <Header/>
                <NewsList news={this.state.news}/>                
            </div>
        )

    }  
}

ReactDOM.render(<App/>,document.querySelector("#root"));