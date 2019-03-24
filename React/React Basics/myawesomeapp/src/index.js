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
        news : JSON,
        filtered : []
    }
    getKeyword = (e) => {
        let key = e.target.value;
        let filtered = this.state.news.filter((item)=> {
                return item.title.indexOf(key) > -1
        });
        this.setState ={
            filtered 
        }
        console.log(filtered)
    }
  
    render(){
       let newsFiltered = this.state.filtered;
       let newsFull = this.state.news;


         return (
            <div>
                <Header keyword={this.getKeyword}/>

                <NewsList news={newsFiltered.length === 0 ? newsFull : newsFiltered  }>
                <h3>
                    The Headlines 
                </h3>
                </NewsList>                
            </div>
        )

    }  
}

ReactDOM.render(<App/>,document.querySelector("#root"));