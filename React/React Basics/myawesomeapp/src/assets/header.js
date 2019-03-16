import React,{ Component } from 'react';
import '../css/styles.css'

class Header extends Component {
  state ={
     active:false,
     kewords:''
   }

  oninputclick = (event) => {

    const value = event.target.value === ' ' ? false : true ;
    this.setState({
      active : value,
      kewords : ' event.target.value'
    });


  }
            render(){
                 return (
               <header style={{background:`${this.state.active ? 'red': 'blue'}`}}>
               <div className="logo" >TIMES</div>
               <div ><input type="text"   onChange={(e) => this.oninputclick(e)}/></div>
               </header>
            )
  }
}



export default Header;