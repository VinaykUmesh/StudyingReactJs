import React from 'react';
import { Link  } from 'react-router-dom';

//hoc
import Card from  '../hoc/cards';
import Auth from '../hoc/auth';

const Profiles = (props) => {
    // const Redir = () => { 
        
    //       props.history.push(' / ')
        
    // }
          return (
              <Auth>
                    <Card>
                            <Link to={{
                                    pathname : `${props.match.url}/Profiles`,
                                    }}>Take Me to /Profiles/Posts</Link>              
                    </Card>
              </Auth>
          )
}

export default Profiles;