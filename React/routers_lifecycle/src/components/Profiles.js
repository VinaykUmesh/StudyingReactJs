import React from 'react';
import { Link  } from 'react-router-dom';

const Profiles = (props) => {
    const Redir = () => { 
        return(
           props.history.push(' / ')
        )
    }
          return (
              <div>
              <Link to={{
                      pathname : `${props.match.url}/Posts`,
                      
              }}>Take Me to /Profiles/Posts</Link>     

             
              {Redir()}
              </div>
          )
}

export default Profiles;