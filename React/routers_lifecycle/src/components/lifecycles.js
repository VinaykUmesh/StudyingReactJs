import React,{Component} from 'react';

class Life extends Component {
  //1. get default props
 

  //2. grt state
 state = {
   title : 'Life cycles'
 }
  //3.before render
  componentWillMount(){
     console.log('Before Render')
  }
  componentWillUpdate(){
     console.log('Before UPDATE')
  }
  componentDidUpdate(){
   console.log('After update')
  }

  shouldComponentUpdate(nextProps,nextState){
          console.log(nextState)
          
          if(nextState.title === 'Something Else'){
           return false
          }
          return true;
  }
  componentWillReceiveProps(){
     console.log('Before Receive Props')
  }
  componentWillUnmount(){
      console.log('Unmount')
  }
  //4. Render jsx
    render(){
     console.log('render')
          return (
                  <div>
                       <h3>{this.state.title}</h3>
                       <div
                         onClick = {
                          ()=>this.setState ({
                                 title : 'Something Elsee'
                          })
                         }
                       >Click to change</div>
                  </div>
          )
    }
     // 4. after render
   componentDidMount(){
    console.log('After Render')
    document.querySelector('h3').style.color = 'red';
   }
}

export default Life;