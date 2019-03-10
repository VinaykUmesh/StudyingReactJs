import React from 'react';
import ReactDOM from 'react-dom';


//Assets
import Header from './assets/header'

//Fetching Dynamic Data form the user object 
const user = {
    fname : 'Vinayk',
    lname : 'Umesh',
    age : 23
}

const App = () => {
         return (
              <div>
                  <div><Header/></div>
                  <div>This is {user.fname} {user.lname} ,and Im {user.age} years old</div>
              </div>
          )
}

ReactDOM.render(<App/>,document.querySelector("#root"));