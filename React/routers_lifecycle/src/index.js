import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';


//components
import Home from './components/Home';
import Posts from './components/Posts';
import Profiles from './components/Profiles';


const App = ( )=> {
 return (
          <BrowserRouter>
                <div>
                 <header>Header</header>
                     <Route path="/" exact  component={Home}/>
                     <Route path="/Posts" component={Posts}/>
                     <Route path="/Profiles" component={Profiles}/>           
                </div>                 
          </BrowserRouter>
 )
}


ReactDOM.render(
       <App/>,
       document.querySelector("#root")
)

