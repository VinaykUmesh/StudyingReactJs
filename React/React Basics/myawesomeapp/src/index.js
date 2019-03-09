import React from 'react';
import ReactDOM from 'react-dom';


//Assets
import Header from './assets/header'


const App = () => {
         return (
          <div>
              <Header/>
              </div>
          )
}

ReactDOM.render(<App/>,document.querySelector("#root"));