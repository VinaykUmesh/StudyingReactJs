import React, { Component } from 'react';
import SliderTemplates from './slider_templates';

class NewsSlider extends Component {

 state = {
     news : []
 }

 componentWillMount(){
    fetch(`http://localhost:3002/articles?_start=${this.props.start}_&_end=${this.props.amount}`)
    .then(res => res.json())
    .then(result => {
          this.setState({
               news : result       
          })
    })
}

 render() {
  return (
   <div>
           <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
   </div>
  );
 }
}

export default NewsSlider;