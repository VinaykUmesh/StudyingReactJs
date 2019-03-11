import React,{ Component } from 'react';
import '../css/styles.css'

class Header extends Component {

  oninputclick (event) {
    console.log(event.target.value)

  }
            render(){
                 return (
               <header >
               <div className="logo" >LOGO</div>
               <div ><input type="text"   onChange={(e) => this.oninputclick(e)}/></div>
               </header>
            )
           }
          }



export default Header;