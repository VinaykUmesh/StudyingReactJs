import React from 'react';
import { Link } from 'react-router-dom';

const Profiles = (props) => {
          return (
              <Link to={{
                      pathname : `${props.match.url}/Posts`,
                      
              }}>Take Me to /Profiles/Posts</Link>     
          )
}

export default Profiles;