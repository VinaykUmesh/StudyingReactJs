import React,{ Component } from 'react';
import '../css/styles.css'

class Header extends Component {
   
    state = {
         keywords : 'Hello',
         title : 'the Keywords are :'
    }

  oninputclick  = (event)  => {
    // console.log(event.target.value)
    this.setState({
         keywords: event.target.value
    })


  }
            render(){
              console.log(this.state.keywords)
                 return (
               <header >
               <div className="logo" >LOGO</div>
               <div ><input type="text"   onChange={this.oninputclick}/></div>
               <div className="logo">{this.state.title}</div>
               <div className="logo">{this.state.keywords}</div>
               </header>
            )
           }
}

export default Header;