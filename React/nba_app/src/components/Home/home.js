import React from 'react';
import NewsSlider from '../widgets/NewsSliders/slider';

const Home = () => {
 return (
  <div>
      <NewsSlider 
            type="featured"
            start={3}
            amount={6}
            settings={{
                dots : false
            }}      
      />
  </div>
 );
};

export default Home;