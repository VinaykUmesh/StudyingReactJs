import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Link } from 'react-router-dom';


//components
import Home from './components/Home';
import Posts from './components/Posts';
import Profiles from './components/Profiles';


const App = ( )=> {
 return (
          <BrowserRouter>
                <div>
                 <header>
                              <Link to='/'>Home</Link><br/>
                              <Link to='/Posts'>Posts</Link><br/>
                              <Link to='/Profiles'>Profiles</Link><br/>
                              <hr/>
                 </header>
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

