import React,{ Component } from 'react';
import '../css/styles.css'


class Header extends Component {

  state={
   
   keyword : 'active'
  }

  inputchangehandler = (event) => {
         const value = event.target.value.length>0 ? 'active' : 'non-active';
           this.setState({
            active: value,
            keyword :value
           });
  }

             render(){

              // const style = {
              //  background : 'blue'
              // }
              // if(this.state.keyword.length>0){
              //  style.background = 'red'
              // }else{
              //  style.background= 'blue'
              // }


                 return (
                  <header className={this.state.keyword}>
                   <div className="logo">Times</div>
                       <input 
                       type="text"
                       onChange={this.inputchangehandler}
                       />
                  </header>
                 )
             }
}



export default Header;