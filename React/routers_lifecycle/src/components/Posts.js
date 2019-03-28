import React from 'react';
import {Link } from 'react-router-dom';

const Posts = () => {
          return (
                    <div>
                        <Link  to="Posts/1">Posts/1</Link><br/>
                        <Link  to="Posts/2">Posts/2</Link><br/>
                        <Link  to="Posts/3">Posts/3</Link>
                    </div>
          )
}

export default Posts;