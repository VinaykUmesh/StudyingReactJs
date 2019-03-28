import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Link , NavLink , Switch } from 'react-router-dom';


//components
import Home from './components/Home';
import Posts from './components/Posts';
import Profiles from './components/Profiles';
import PostItem from './components/post_item';


const App = ( )=> {
 return (
          <BrowserRouter>
                <div>
                 <header>
                              <Link to='/'>Home</Link><br/>
                              <NavLink
                               to='/Posts'
                               activeStyle ={{color: 'black'}}
                               activeClassName="active-state"
                              
                               >Posts</NavLink><br/>
                              <Link to='/Profiles'>Profiles</Link><br/>
                              <hr/>
                 </header>
                 <Switch>
                          <Route path="/Posts/:id/:username" component={PostItem}/>
                          <Route path="/Profiles" component={Profiles}/>           
                          <Route path="/Posts"  component={Posts}/>
                          <Route path="/"  exact  component={Home}/>  
                          <Route component={Posts} />
                 </Switch>
                     </div>                 
          </BrowserRouter>
 )
}


ReactDOM.render(
       <App/>,
       document.querySelector("#root")
)

