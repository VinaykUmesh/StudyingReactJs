import React, { Component } from 'react';
import SliderTemplates from './slider_templates';

class NewsSlider extends Component {

 state = {
     news : []
 }

 componentWillMount(){
    fetch(`http://localhost:3002/articles?_start=0_&_end=3`)
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
           <SliderTemplates data={this.state.news} type="featured"/>
   </div>
  );
 }
}

export default NewsSlider;